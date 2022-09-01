import { gql } from "@apollo/client";

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!, $firstName: String!, $lastName: String!) {
    addUser(username: $username, email: $email, password: $password, firstName: $firstName, lastName: $lastName) {
      token
      user {
        _id
      }
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

// not sure if this works
export const ADD_CONTRACT = gql`
mutation Mutation($contractData: ContractInput) {
    addContract(contractData: $contractData) {
      user {
        userName
      }
      title
      description
      category {
        name
      }
      price
      contractDate
      _id
    }
}`
// add response
export const ADD_RESPONSE = gql`
mutation AddResponse($responseData: ResponseInput) {
  addResponse(responseData: $responseData) {
    _id
    user {
      username
    }
    title
    description
    category {
      name
    }
    price
    contractDate
    responses {
      _id
    }
  }
}`
// delete contract
export const DELETE_CONTRACT = gql`
mutation DeleteContract($contractId: ID!) {
  deleteContract(contractId: $contractId) {
    _id
    user {
      username
    }
    title
    description
    category {
      name
    }
    price
    contractDate
    responses {
      _id
    }
  }
}`
// delete response


//   update user
export const UPDATE_USER = gql`
mutation UpdateUser($email: String, $password: String) {
    updateUser(email: $email, password: $password) {
      _id
      userName
      email
      joinDate
    }
  }`


