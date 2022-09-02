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
        username
        firstName
        lastName
        email
      }
    }
  }
`;

// working
export const ADD_CONTRACT = gql`
  mutation AddContract($user_id: String!, $title: String!, $description: String!, $category: String, $price: String, $contractDate: String, $username: String!) {
    addContract(user_id: $user_id, title: $title, description: $description, category: $category, price: $price, contractDate: $contractDate, username: $username) {
      title
      description
      category
      price
      contractDate
      responses {
        responseAuthor
        responseDescription
        price
        responseDate
      }
    }
  }
`;
// add response... Working
export const ADD_RESPONSE = gql`
  mutation AddResponse(
    $contractId: ID!
    $responseDescription: String!
    $price: String
    $responseDate: String
  ) {
    addResponse(
      contractId: $contractId
      responseDescription: $responseDescription
      price: $price
      responseDate: $responseDate
    ) {
      username
      title
      description
      category
      price
      contractDate
      responses {
        responseAuthor
        price
        responseDescription
        responseDate
      }
    }
  }
`;
// delete contract... WORKING WITH VALIDATION
export const DELETE_CONTRACT = gql`
  mutation DeleteContract($contractId: ID!) {
    deleteContract(contractId: $contractId) {
      username
      title
      description
      price
      contractDate
    }
  }
`;
// delete response... working
export const DELETE_RESPONSE = gql`
  mutation DeleteResponse($contractId: ID!, $responseId: ID!) {
    deleteResponse(contractId: $contractId, responseId: $responseId) {
      responses {
        responseAuthor
        responseDescription
        price
        responseDate
      }
    }
  }
`;

//   update user
// export const UPDATE_USER = gql`
//   mutation UpdateUser($email: String, $password: String) {
//     updateUser(email: $email, password: $password) {
//       _id
//       userName
//       email
//       joinDate
//     }
//   }
// `;
