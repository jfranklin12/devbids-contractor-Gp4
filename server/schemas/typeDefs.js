const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }
  
  type Contract {
    _id: ID
    username: [User]
    description: String!
    price: Float
    category: [Category]
    token: Int
    contractDate: Date!
  }

  type Response {
    _id: ID
    username: [User]
    description: String
    price: Float
    category: [Category]
    responseDate: Date!
  }

  type User {
    _id: ID
    userName: String
    email: String
    joinDate: Date!
  }

  type Transaction {
    _id: ID
    ContractUser: [Contract]!
    ResponseUser: [Response]!
    ContractID: [Contract]!
    category: [Category]!
    price: Float
    transactionDate: Date!
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
    contracts(category: ID, name: String): [Contract]
    response(_id: ID!): [Response]
    user: User

    order(_id: ID!): Contract
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addContract(products: [ID]!): Contract
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateResponse(_id: ID!, quantity: Int!): Response
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
