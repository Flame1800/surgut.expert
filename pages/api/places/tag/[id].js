import nextConnect from 'next-connect';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();


const handler = nextConnect()
  
  //GET api/places/category/:id Все места с определенным тэгом
  .get(async (req, res) => {
    const tag_id = Number(req.query.id);
        
    const places = await prisma.place.findMany({
      where: {
        tags: {
          some: {
            id: tag_id
          }
        }
      },
    })
    
    res.statusCode = 200;
    res.json({
        status: 'success',
        data: places
    })
  })


export default handler;