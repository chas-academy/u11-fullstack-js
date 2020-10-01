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

const getUserByIdQuery = gql`
  query getUserById($id: ID!) {
    userById(id: $id) {
      username
      email
      password
    }
  }
`;

const getUserQuery = gql`
  query getUser($accessToken: String!) {
    user(accessToken: $accessToken) {
      username
      email
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

const updateUserQuery = gql`
  mutation updateUser($id: String!, $username: String!, $password: String!) {
    updateUser(id: $id, username: $username, password: $password) {
      username
      password
    }
  }
`;

export {
  loginQuery,
  signUpQuery,
  getUsersQuery,
  removeUserQuery,
  updateUserQuery,
  getUserByIdQuery,
  getUserQuery,
};
