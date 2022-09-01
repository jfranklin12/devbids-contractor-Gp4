import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query Query {
    user {
      _id
      firstName
      lastName
      username
      email
    }
  }`

export const QUERY_CONTRACTS = gql`
query Query {
    contracts {
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
        responseAuthor {
          username
        }
      }
    }
  }`

export const QUERY_USER_CONTRACTS = gql `
query UserContracts {
    userContracts {
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
        responseAuthor {
          username
        }
        description
        category {
          name
        }
        price
        responseDate
      }
    }
  }`