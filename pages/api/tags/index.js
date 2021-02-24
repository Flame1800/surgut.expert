import nextConnect from 'next-connect';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const handler = nextConnect()
  
  // GET /api/tags Все тэги
  .get(async (req, res) => {
    res.statusCode = 200;
    const tags = await prisma.tag.findMany()
    res.json({
        status: 'success',
        data: tags,
    })
  })

  //POST /api/tags
  .post(async (req, res) => {

    const result = await prisma.tag.create({
      data: req.body
    })

    res.json({
        status: 'success'
    })
})
export default handler;
