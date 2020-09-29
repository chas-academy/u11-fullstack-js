import { gql } from 'apollo-boost'

const loginQuery = gql`
    query login($email: String!, $password: String!) {
        login(email: $email, $password: $password) {
            accessToken
        }
    }
`

const anotherQuery = gql`
  query {
    defaulttext {
      name
    }
  }
`

export { loginQuery, anotherQuery }
