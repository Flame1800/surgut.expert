import { ApolloServer } from 'apollo-server-micro'
import { schema } from '../apollo/schema'
import sequelize from './db'

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    console.log(`database connected on port ${process.env.PORT}`)
  }
  catch (e) {
    console.log(e)
  }
}

start()

const server = new ApolloServer({ schema })

export default server
