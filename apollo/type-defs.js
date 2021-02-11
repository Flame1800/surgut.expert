import { gql } from '@apollo/client'

export const typeDefs = gql`

type User {
    id: ID
    login: String
    phone: String
    name: String
    password: String
    favorite: [Place]
}

input UserInput {
    id: ID
    login: String!
    phone: String!
    name: String!
    password: String!
}

type Category {
    id: Int
    name: String
    img: String
}

type Place {
    id: Int
    category: [Category]
    name: String
    location: String
    services: String
    description: String
}

type Query {
    getAllUsers: [User]
    getUser(id: ID): User
}

type Mutation {
    createUser(input: UserInput): User
}
`