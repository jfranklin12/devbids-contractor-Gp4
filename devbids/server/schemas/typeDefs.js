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
<<<<<<< HEAD
    contractDate: Date!
=======
    requestDate: String
>>>>>>> 519f41ac381ca287dd896d83b8046734e31556ba
  }

  type Response {
    _id: ID
    username: [User]
    description: String
    price: Float
    category: [Category]
<<<<<<< HEAD
    responseDate: Date!
=======
    requestDate: String
>>>>>>> 519f41ac381ca287dd896d83b8046734e31556ba
  }

  type User {
    _id: ID
    userName: String
    email: String
<<<<<<< HEAD
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
=======
    requests: [Request]
    responses: [Response]
    
>>>>>>> 519f41ac381ca287dd896d83b8046734e31556ba
  }

  

  type Query {
    categories: [Category]
    contracts(category: ID, name: String): [Contract]
    response(_id: ID!): [Response]
    user: User

<<<<<<< HEAD
    order(_id: ID!): Contract
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addContract(products: [ID]!): Contract
=======
    order(_id: ID!): Request
    
  }

  type Mutation {
    addRequest(products: [ID]!): Request
>>>>>>> 519f41ac381ca287dd896d83b8046734e31556ba
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
