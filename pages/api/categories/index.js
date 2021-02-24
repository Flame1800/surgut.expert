import nextConnect from 'next-connect';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const handler = nextConnect()
  
  // GET /api/categories
  .get(async (req, res) => {
    res.statusCode = 200;
    const categories = await prisma.category.findMany()
    res.json({
        status: 'success',
        data: categories,
    })
  })


  // POST /api/categories
  .post(async (req, res) => {

    const result = await prisma.category.create({
      data: req.body
    })
    res.statusCode = 200;
    res.json(JSON.stringify(result))
})
export default handler;
