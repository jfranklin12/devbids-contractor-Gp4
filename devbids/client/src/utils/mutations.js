import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation AddUser(
    $username: String!
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
    ) {
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

export const ADD_CONTRACT = gql`
mutation AddContract($title: String!, $description: String!, $price: Int, $contractDate: String, $username: String!) {
  addContract(title: $title, description: $description, price: $price, contractDate: $contractDate, username: $username) {
    title
    description
    price
    contractDate
  }
}
`;
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
    }
  }
`;
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
  }
`;
// delete response
export const DELETE_RESPONSE = gql`
  mutation DeleteResponse($contractId: ID!, $responseId: ID!) {
    deleteResponse(contractId: $contractId, responseId: $responseId) {
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
    }
    responses {
      _id
      responseAuthor {
        username
      }
    }
  }
`;

//   update user
export const UPDATE_USER = gql`
  mutation UpdateUser($email: String, $password: String) {
    updateUser(email: $email, password: $password) {
      _id
      userName
      email
      joinDate
    }
  }
`;
