const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }
  
  type Request {
    _id: ID
    username: [User]
    description: String
    price: Float
    category: [Category]
    token: Int
    requestDate: Date!
  }

  type Response {
    _id: ID
    username: [User]
    description: String
    price: Float
    category: [Category]
    requestDate: Date!
  }

  type User {
    _id: ID
    userName: String
    email: String
    requests: [Request]
    responses: [Response]
    transactions: [Transaction]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    requests(category: ID, name: String): [Request]
    response(_id: ID!): [Response]
    user: User

    order(_id: ID!): Request
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addRequest(products: [ID]!): Request
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateResponse(_id: ID!, quantity: Int!): Response
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
