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
        itemId
        name
        price
        quantity
      }
    }
  }
`;

const removeCartItemQuery = gql`
  mutation removeFromCart($accessToken: String!, $itemId: ID!) {
    removeCartItem(accessToken: $accessToken, itemId: $itemId) {
      cart {
        name
      }
    }
  }
`;

export { getAllProductsQuery, addToCartQuery, getCartQuery, removeCartItemQuery };
