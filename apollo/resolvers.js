
const users = [
    {
        id: 1,
        login: "user_test",
        phone: "+7-932-255-68-93",
        name: "Test User",
        password: "test_password"
    },
    {
        id: 2,
        login: "user_test2",
        phone: "+7-932-277-58-55",
        name: "Test UserSecond",
        password: "test_password2"
    }
]

export const resolvers = {
    Query: {
        getAllUsers: () => {
            return users
        },
        getUser: (_, args) => {
            return users.find((user) => user.id == args.id)
        },
    },
    Mutation: {
        createUser(_, { input }) {
            const id = new Date()
            const user = {
                id, ...input
            }
            users.push(user)
            return user
        }
    }

}