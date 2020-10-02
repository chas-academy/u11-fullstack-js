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

const addToCartQuery = gql`
  mutation addToCart($accessToken: String!, $itemId: ID!, $name: String!, $price: Float!) {
    addToCart(accessToken: $accessToken, itemId: $itemId, name: $name, price: $price) {
      cart {
        name
      }
    }
  }
`;

const getCartQuery = gql`
  query getcart($accessToken: String!) {
    user(accessToken: $accessToken) {
      cart {
        name
        price
        quantity
      }
    }
  }
`;

export { getAllProductsQuery, addToCartQuery, getCartQuery };
