import nextConnect from 'next-connect';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();


const handler = nextConnect()
  
  // GET /api/places/:id Место по id
  .get(async (req, res) => {
    const place_id = Number(req.query.id);
    const place = await prisma.place.findUnique({
        where: {
            id: place_id
        }
    })

    res.statusCode = 200;
    res.json({
        status: 'success',
        data: place,
    })
  })

  // PUT /api/places/:id Изменяем данные конкретного месте
  .put(async (req, res) => {
    const place_id = Number(req.query.id);
    const { body } = req;

    const place = await prisma.place.update({
      where: { id: place_id },
      data: body,
    })
    res.json({
      status: 'success',
      data: place,
    })
  })
 
export default handler;
