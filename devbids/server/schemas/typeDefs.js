const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }
  
  type Contract {
    _id: ID
    user: User
    title: String!
    description: String!
    category: [Category]
    price: Int
    contractDate: String
  }

  input ContractInput {
    _id: ID
    contractAuthor: String
    contractTitle: String
    contractDescription: String
    category: String
    price: Int
    contractDate: String
  }

  type Response {
    _id: ID
    username: User!
    description: String!
    contractId: Contract!
    category: [Category]!
    price: Int
    responseDate: String
  }

  type User {
    _id: ID
    userName: String
    email: String
    joinDate: String
  }

  type Transaction {
    _id: ID
    contractUser: Contract!
    responseUser: Response!
    contractId: Contract!
    category: [Category]!
    price: Int
    transactionDate: String
  }
  
  type Comment {
    _id: ID
    username: User!
    description: String!
    contractId: [Contract]!
    commentDate: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    contracts: [Contract]
    userContracts: [Contract]
    category(categoryId: ID!): [Contract]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String! password: String!): Auth
    addContract(contractData: ContractInput): Contract
    addResponse(contractId: ID!, description: String!): Contract
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    deleteResponse(contractId: ID!, responseId: ID!): Contract
    
  }
`;

module.exports = typeDefs;
