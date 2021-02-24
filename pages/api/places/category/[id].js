import nextConnect from 'next-connect';
import { PrismaClient } from '@prisma/client'


const handler = nextConnect()
  .get(async (req, res) => {
    const category_id = Number(req.query.id);
    
    const prisma = new PrismaClient();
    
    const places = await prisma.placeCategories.findMany({
      where: {
        category_id
      },
      include: {
        places: true
      }     
    })
    
    res.statusCode = 200;
    res.json({
        status: 'success',
        data: places.map(el => el.places),
    })
  })


export default handler;
