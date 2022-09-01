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
    responses: [Response]
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
    responseAuthor: User!
    description: String!
    contractId: Contract!
    category: [Category]!
    price: Int
    responseDate: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
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
    addUser(username: String!, email: String! password: String!, firstName: String!, lastName: String!): Auth
    addContract(contractData: ContractInput): Contract
    addResponse(contractId: ID!, description: String!,responseAuthor: String!, description: String!, contractId: ID!, category: [String]!, price: Int,     responseDate: String): Contract
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    deleteContract(contractId: ID!): Contract
    deleteResponse(contractId: ID!, responseId: ID!): Contract
    
  }
`;

module.exports = typeDefs;
