import nextConnect from 'next-connect';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const handler = nextConnect()
  
  // GET /api/places Все места
  .get(async (req, res) => {
    res.statusCode = 200;
    const places = await prisma.place.findMany({
      include: {
        categories: true
      }
    })
    res.json({
        status: 'success',
        data: places,
    })
  })

  // POST /api/places Создать новое место
  .post(async (req, res) => {
    const result = await prisma.place.create({
      data: req.body
    })
    res.statusCode = 200;
    res.json(JSON.stringify(result))
})
export default handler;
