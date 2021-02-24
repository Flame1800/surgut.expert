import nextConnect from 'next-connect';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const handler = nextConnect()
  
  // GET api/tags/category/:id - все тэги категории с id
  .get(async (req, res) => {
    const category_id = Number(req.query.id);
    const tags = await prisma.tag.findMany({
      where: {
        category: {
          id: category_id
        }
      }
    })
    res.statusCode = 200;
    res.json({
        status: 'success',
        data: tags,
    })
  })

export default handler;
