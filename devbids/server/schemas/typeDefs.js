const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }
  
  type Contract {
    _id: ID
    username: [User]
    title: String!
    description: String!
    category: [Category]
    price: Decimal128
    contractDate: Date
  }

  type Response {
    _id: ID
    username: [User]!
    description: String!
    contractId: [Contract]!
    category: [Category]!
    price: Decimal128
    responseDate: Date
  }

  type User {
    _id: ID
    userName: String
    email: String
    joinDate: Date
  }

  type Transaction {
    _id: ID
    contractUser: [Contract]!
    responseUser: [Response]!
    contractId: [Contract]!
    category: [Category]!
    price: Decimal128
    transactionDate: Date
  }
  
  type Comment {
    _id: ID
    username: [User]!
    description: String!
    contractId: [Contract]!
    commentDate: Date
  }

  type Query {
    user: User
    getAllContracts: [Contract]
    getUserContracts(user: ID!): [Contract]
    getCategoryContracts(category: ID!): [Contract]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, password: String!, email: String!, password: String!): Auth
    addContract(contract: [ID]!): Contract
    addResponse(products: [ID]!): Request
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateResponse(_id: ID!, quantity: Int!): Response
    
  }
`;

// This was commented out during debugging
// const typeDefs = gql`
//   type Category {
//     _id: ID
//     name: String
//   }
  
//   type Request {
//     _id: ID
//     username: [User]
//     description: String
//     price: Float
//     category: [Category]
//     token: Int
//     requestDate: String
//   }

//   type Response {
//     _id: ID
//     username: [User]
//     description: String
//     price: Float
//     category: [Category]
//     requestDate: String
//   }

//   type User {
//     _id: ID
//     userName: String
//     email: String
//     requests: [Request]
//     responses: [Response]
//     transactions: [Transaction]
//   }

//   // type Checkout {
//   //   session: ID
//   // }

//   // type Auth {
//   //   token: ID
//   //   user: User
//   // }

//   type Query {
//     categories: [Category]
//     requests(category: ID, name: String): [Request]
//     response(_id: ID!): [Response]
//     user: User

//     order(_id: ID!): Request
//     // checkout(products: [ID]!): Checkout
//   }

//   type Mutation {
//     addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
//     addRequest(products: [ID]!): Request
//     updateUser(firstName: String, lastName: String, email: String, password: String): User
//     updateResponse(_id: ID!, quantity: Int!): Response
//     // login(email: String!, password: String!): Auth
//   }
// `;

module.exports = typeDefs;
