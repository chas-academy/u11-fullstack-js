import React from 'react';
import { useMutation } from 'react-apollo';

import styles from './item.module.css';
import { addToCartQuery } from '../../../queries/product-queries';
// import images from '../../../images/products';

interface itemProps {
  item: {
    id: string;
    name: string;
    price: number;
    type: string;
    img: string;
  };
}

interface cartVariables {
  accessToken: any;
  itemId: string;
  name: string;
  price: number;
}

interface cartData {
  user: {
    cart: {
      name: string;
    };
  };
}

const Item = (props: itemProps) => {
  let token: any = '';
  if (localStorage.getItem('accessToken')) {
    token = localStorage.getItem('accessToken');
  }

  const { id, name, price, type, img } = props.item;

  const [addToCart, { error, data }] = useMutation<cartData, cartVariables>(addToCartQuery, {
    variables: {
      accessToken: token,
      itemId: id,
      name: name,
      price: price,
    },
    onCompleted: () => {
      console.log(data);
    },
    onError: () => {
      console.log(error);
    },
  });

  return (
    <div className={`${styles.container} bg-primary shadowed`}>
      <h4>{name}</h4>
      <img src={require(`../../../images/products/${img}`)} alt="" />
      <p>Category: {type}</p>
      <p>Price: {price} EUR</p>
      <button className={`btn`} onClick={() => addToCart()}>
        Add To Cart
      </button>
    </div>
  );
};

export default Item;
