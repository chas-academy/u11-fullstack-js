import { gql } from 'apollo-boost';

const getAllProductsQuery = gql`
  query {
    products {
      id
      name
      price
      type
      img
    }
  }
`;

export { getAllProductsQuery };
