import React, { useState } from 'react';
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
  addtoCart: {
    username: String;
    cart: items[];
  };
}

interface items {
  name: string;
}

const Item = (props: itemProps) => {
  let token: any = '';
  if (localStorage.getItem('accessToken')) {
    token = localStorage.getItem('accessToken');
  }

  const { id, name, price, type, img } = props.item;
  const [added, setAdded] = useState(false);

  const [addToCart, { error }] = useMutation<cartData, cartVariables>(addToCartQuery, {
    variables: {
      accessToken: token,
      itemId: id,
      name: name,
      price: price,
    },
    onError: () => {
      console.log(error);
    },
  });

  const handleClick = () => {
    addToCart();
    setAdded(true);
  };

  return (
    <div className={`${styles.container} bg-primary shadowed`}>
      <h4>{name}</h4>
      <img src={require(`../../../images/products/${img}`)} alt="" />
      <p>Category: {type}</p>
      <p>Price: {price} EUR</p>
      {!added ? (
        <button className={`btn`} onClick={() => handleClick()}>
          Add To Cart
        </button>
      ) : (
        <button className={`btn`}>In Cart</button>
      )}
    </div>
  );
};

export default Item;
