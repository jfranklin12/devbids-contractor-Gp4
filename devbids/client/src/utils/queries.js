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