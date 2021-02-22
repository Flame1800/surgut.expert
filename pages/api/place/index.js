import nextConnect from 'next-connect';
const models = require('../../../db/models/index');


const handler = nextConnect()
  // Get method
  .get(async (req, res) => {

    //const places = await models.Place.findAll({ raw: true });

    res.statusCode = 200;
    res.json({
      status: 'success',
      data: 'hello',
    });
  })

export default handler;
