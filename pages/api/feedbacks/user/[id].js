import nextConnect from 'next-connect';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();


const handler = nextConnect()
  
  //GET api/feedbacks/user/:id Все отзывы от пользователя
  .get(async (req, res) => {
    const userId = Number(req.query.id);
        
    const feedbacks = await prisma.feedback.findMany({
      where: {
        userId: userId
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