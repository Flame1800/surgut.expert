import nextConnect from 'next-connect';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const handler = nextConnect()
  
  // GET /api/places Все места
  .get(async (req, res) => {
    res.statusCode = 200;
    const places = await prisma.place.findMany({
      include: {
        categories: true,
        tags: true,
        picturies: true      }
    })
    res.json({
        status: 'success',
        data: places,
    })
  })

  // POST /api/places Создать новое место
  .post(async (req, res) => {
    const { categories, tags, picturies, ...place} = req.body;
    const categories_ids = categories.map(el => ({id: el}))
    const tags_ids = tags.map(el => ({id: el}))
    const pictury_hrefs = picturies.map(el => ({href: el}))

    const result = await prisma.place.create({
      data: {
        ...place, 
        categories: { 
          connect: categories_ids
        },
        tags: {
          connect: tags_ids
        },
        picturies: {
          create: pictury_hrefs
        },
      }      
    })
    res.statusCode = 200;
    res.json(JSON.stringify(result))
})
export default handler;
