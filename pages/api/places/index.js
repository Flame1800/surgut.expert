import nextConnect from 'next-connect';
import { PrismaClient } from '@prisma/client'


const handler = nextConnect()
  .get(async (req, res) => {
      const prisma = new PrismaClient();
      res.statusCode = 200;
      const places = await prisma.place.findMany()
      res.json({
          status: 'success',
          data: places,
      })
  })

  .post(async (req, res) => {
    const prisma = new PrismaClient();
    const result = await prisma.place.create({
      data: req.body
    })
    res.statusCode = 200;
    res.json(JSON.stringify(result))
})
export default handler;
