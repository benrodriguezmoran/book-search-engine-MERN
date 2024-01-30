const typeDefs = `
type User {
    username: String
    email: String
}

type Auth {
  token: ID
  user: User
}
type Book {
  authors: [
    {
    },
  ],
  description: {
  },
  bookId: {
  },
  image: {
  },
  link: {
  },
  title: {
  },
}
type Query {
  categories: [Category]
  products(category: ID, name: String): [ID]
  product(_id: ID!): ID
  user: User
    jobs: [Job]
  Post(id: ID!): Post
  Project(id: ID!): Project
    projects: [Project]
}
type Mutation {
  addUser(username: String!, password: String!): Auth
  addJob(title: String!, start_date: String!, end_date: String!, location: String!): Job
  updateUser(username: String, password: String): User
  login(username: String!, password: String!): Auth
}`


module.exports = typeDefs;