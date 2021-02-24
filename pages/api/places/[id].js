import nextConnect from 'next-connect';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();


const handler = nextConnect()
  
  // GET /api/places/:id Место по id
  .get(async (req, res) => {
    const place_id = Number(req.query.id);
    const places = await prisma.place.findUnique({
        where: {
            id: place_id
        }
    })

    res.statusCode = 200;
    res.json({
        status: 'success',
        data: places,
    })
  })
 
export default handler;
