import { gql } from '@apollo/client';
// query for user information working
export const QUERY_USER = gql`
query User {
    user {
      firstName
      lastName
      username
      email
    }
  }
`
// query for contracts working
export const QUERY_CONTRACTS = gql`
query Contracts {
    contracts {
      username
      title
      description
      price
      contractDate
    }
  }
`
// query for contracts by user to render to profile page
export const QUERY_USER_CONTRACTS = gql`
query UserContracts {
    userContracts {
      username
      title
      description
      price
      contractDate
    }
  }
`
// NOT WORKING YET!
export const QUERY_CATEGORY_CONTRACTS = gql`
  query Category($categoryId: ID!) {
    category(categoryId: $categoryId) {
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
`