import { gql } from 'apollo-boost';

const loginQuery = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
    }
  }
`;

export { loginQuery };
