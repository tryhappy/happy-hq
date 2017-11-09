// 1
import gql from 'graphql-tag'

// 2
export const ALL_USERS_QUERY = gql`
  query AllUsersQuery {
    allUsers {
      id
      email
      first_name
      last_name
    }
  }
`
