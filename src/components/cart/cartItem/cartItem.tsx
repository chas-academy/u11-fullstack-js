import React from 'react';
import { useMutation } from 'react-apollo';
import { tokenToString } from 'typescript';

import { removeCartItemQuery } from '../../../queries/product-queries';

interface itemProps {
  item: {
    itemId: string;
    name: string;
    price: number;
    quantity: number;
  };
  i: number;
}

interface cartData {
  cart: cartItem[];
}

interface cartItem {
  name: string;
}

interface cartVariables {
  accessToken: string;
  itemId: string;
}

const CartItem = (props: itemProps) => {
  let token: any = '';
  if (localStorage.getItem('accessToken')) {
    token = localStorage.getItem('accessToken');
  }
  const [removeCartItem, { error, data }] = useMutation<cartData, cartVariables>(
    removeCartItemQuery,
    {
      variables: {
        accessToken: token,
        itemId: props.item.itemId,
      },
      onCompleted: () => {
        window.location.reload();
      },
      onError: () => {
        console.log(error);
      },
    }
  );
  const { name, price, quantity } = props.item;
  return (
    <tr key={props.i}>
      <td>
        <button className={`btn`} onClick={() => removeCartItem()}>
          X
        </button>
      </td>
      <td>{quantity}</td>
      <td>{name}</td>
      <td>{price} EUR</td>
    </tr>
  );
};

export default CartItem;
