import { gql } from 'apollo-boost';

const loginQuery = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
    }
  }
`;

const signUpQuery = gql`
  mutation signUp($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password) {
      username
      admin
    }
  }
`;

const getUsersQuery = gql`
  query {
    users {
      username
      email
      id
    }
  }
`;

const removeUserQuery = gql`
  mutation removeUser($id: String!) {
    deleteUser(id: $id) {
      username
    }
  }
`;

export { loginQuery, signUpQuery, getUsersQuery, removeUserQuery };
