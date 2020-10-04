import React from 'react';

interface itemProps {
  item: {
    name: string;
    price: number;
    quantity: number;
  };
}

const OrderItem = (props: itemProps) => {
  const { name, price, quantity } = props.item;
  return (
    <tr>
      <td>{name}</td>
      <td>{quantity} </td>
      <td>{price} EUR</td>
    </tr>
  );
};

export default OrderItem;
