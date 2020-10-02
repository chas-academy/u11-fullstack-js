import React from 'react';
import { useQuery } from 'react-apollo';

import styles from './cart.module.css';
import cartLogo from '../../images/cart.jpg';
import CartItem from './cartItem/cartItem';
import { getCartQuery } from '../../queries/product-queries';
import { tokenToString } from 'typescript';

interface cartVariables {
  accessToken: string;
}

interface cartData {
  user: {
    cart: cartItem[];
  };
}

interface cartItem {
  name: string;
  price: number;
  quantity: number;
}

const Cart = () => {
  let token: any = '';
  if (localStorage.getItem('accessToken')) {
    token = localStorage.getItem('accessToken');
  }
  const { error, data } = useQuery<cartData, cartVariables>(getCartQuery, {
    variables: {
      accessToken: token,
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
      <div className={styles.left}>
        <img src={cartLogo} alt="" />
        <h3>Your shopping cart</h3>
      </div>
      <div className={styles.right}>
        <table>
          <thead>
            <th></th>
            <th>Quantity</th>
            <th>Item</th>
            <th>Price</th>
          </thead>
          {data?.user.cart.map((item) => {
            return <CartItem item={item} />;
          })}
          <tr className={styles.tableFooter}>
            <td colSpan={3}>
              <h4>Total: 6000.00 EUR</h4>
            </td>
            <td>
              <button className={`btn`}>ORDER</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Cart;
