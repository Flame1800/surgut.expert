import nextConnect from 'next-connect';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();


const handler = nextConnect()
  
  // GET /api/feedbacks/:id Отзыв по id
  .get(async (req, res) => {
    const feedback_id = Number(req.query.id);
    const feedback = await prisma.feedback.findUnique({
        where: {
            id: feedback_id
        }
    })

    res.statusCode = 200;
    res.json({
        status: 'success',
        data: feedback,
    })
  })
 
export default handler;
