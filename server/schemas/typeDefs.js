const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    forSale: String
    link: String
    title: String
  }
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Query {
    me: User
  }
  type Auth {
    token: ID!
    user: User
  }
  input savedBook {
    authors: [String]
    description: String
    bookId: String
    image: String
    forSale: String
    link: String
    title: String
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(book: SavedBook): User
    removeBook(bookId: String!): User
  }
`;
