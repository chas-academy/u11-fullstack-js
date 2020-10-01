import React from 'react';
import styles from './item.module.css';
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

const Item = (props: itemProps) => {
  const { id, name, price, type, img } = props.item;
  return (
    <div className={`${styles.container} bg-primary shadowed`}>
      <h4>{name}</h4>
      <img src={require(`../../../images/products/${img}`)} alt="" />
      <p>Category: {type}</p>
      <p>Price: {price} EUR</p>
      <button className={`btn`}>Add To Cart</button>
    </div>
  );
};

export default Item;
