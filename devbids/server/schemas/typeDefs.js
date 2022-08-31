const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }
  
  type Contract {
    _id: ID
    username: User
    title: String!
    description: String!
    category: [Category]
    price: Decimal128
    contractDate: Date
  }

  type Response {
    _id: ID
    username: User!
    description: String!
    contractId: Contract!
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
    contractUser: Contract!
    responseUser: Response!
    contractId: Contract!
    category: [Category]!
    price: Decimal128
    transactionDate: Date
  }
  
  type Comment {
    _id: ID
    username: User!
    description: String!
    contractId: [Contract]!
    commentDate: Date
  }

  type Query {
    user: User
    contracts: [Contract]
    userContracts: [Contract]
    category(categoryId: ID!): [Contract]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, password: String!, email: String!, password: String!): Auth
    addContract(contract: ID!): Contract
    addResponse(contractId: ID!, description: String!): Contract
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    deleteResponse(contractId: ID!, responseId: ID!): Contract
    
  }
`;

module.exports = typeDefs;
