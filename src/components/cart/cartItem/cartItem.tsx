import React from 'react';

interface itemProps {
  item: {
    name: string;
    price: number;
    quantity: number;
  };
}

const CartItem = (props: itemProps) => {
  const { name, price, quantity } = props.item;
  return (
    <tr>
      <td>
        <button className={`btn`}>X</button>
      </td>
      <td>{quantity}</td>
      <td>{name}</td>
      <td>{price} EUR</td>
    </tr>
  );
};

export default CartItem;
