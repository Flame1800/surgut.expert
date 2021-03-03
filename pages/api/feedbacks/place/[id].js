import nextConnect from 'next-connect';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();


const handler = nextConnect()
  
  //GET api/feedbacks/place/:id Все отзывы об определенном месте
  .get(async (req, res) => {
    const place_id = Number(req.query.id);
        
    const feedbacks = await prisma.feedback.findMany({
      where: {
        place_id: place_id
      },
    })

    prisma.$disconnect()
    
    res.statusCode = 200;
    res.json({
        status: 'success',
        data: feedbacks
    })
  })


export default handler;