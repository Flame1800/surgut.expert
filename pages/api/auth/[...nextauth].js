import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import Adapters from "next-auth/adapters"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default (req, res) => 
  NextAuth(req, res, {
    providers: [
      Providers.GitHub({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET      
      }),
      Providers.Email({
        server: process.env.MAIL_SERVER,
        from: 'NextAuth.js <no-reply@example.com>'
      })
    ],
    debug: process.env.NODE_ENV === 'development',
    secret: process.env.AUTH_SECRET,
    jwt: {
      secret: process.env.JWT_SECRET
    },
    adapter: Adapters.Prisma.Adapter({ prisma  })
  })