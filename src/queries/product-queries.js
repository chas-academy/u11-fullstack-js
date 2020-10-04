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

const searchProductsQuery = gql`
  query($searchTerm: String!) {
    searchProducts(searchTerm: $searchTerm) {
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

const orderQuery = gql`
  mutation order($accessToken: String!) {
    order(accessToken: $accessToken) {
      id
      items {
        name
      }
      date
    }
  }
`;

const getOrderQuery = gql`
  query($accessToken: String!) {
    order(accessToken: $accessToken) {
      id
      items {
        name
        quantity
        price
      }
      date
    }
  }
`;

export {
  getAllProductsQuery,
  addToCartQuery,
  getCartQuery,
  removeCartItemQuery,
  orderQuery,
  getOrderQuery,
  searchProductsQuery,
};
