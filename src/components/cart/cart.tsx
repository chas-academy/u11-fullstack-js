import React from 'react';
import { useMutation, useQuery } from 'react-apollo';

import styles from './cart.module.css';
import cartLogo from '../../images/cart.jpg';
import CartItem from './cartItem/cartItem';
import { getCartQuery, orderQuery } from '../../queries/product-queries';

interface cartVariables {
  accessToken: string;
}

interface cartData {
  user: {
    cart: cartItem[];
  };
}

interface cartItem {
  itemId: string;
  name: string;
  price: number;
  quantity: number;
}

interface orderData {
  id: string;
  date: string;
  items: cartItem[];
  userId: string;
}

const Cart = () => {
  let token: any = '';
  if (localStorage.getItem('accessToken')) {
    token = localStorage.getItem('accessToken');
  }
  let sum: any = 0;
  const { error, loading, data } = useQuery<cartData, cartVariables>(getCartQuery, {
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
  const [order, { error: orderError }] = useMutation<orderData, cartVariables>(orderQuery, {
    variables: {
      accessToken: token,
    },
    onCompleted: () => {
      window.location.replace('/orderConfirmation');
    },
    onError: () => {
      console.log(orderError);
    },
  });

  const calcSum = () => {
    if (data) {
      if (data.user.cart.length < 1) {
        return 0;
      }
      let priceArray = [];
      for (let i = 0; i < data!.user.cart.length; i++) {
        priceArray.push(data?.user.cart[i].price);
      }
      sum = priceArray.reduce((total: any, currentValue: any) => {
        return (total += currentValue);
      });
      return sum;
    }
  };

  return (
    <div className={`${styles.container} bg-primary shadowed`}>
      <div className={styles.left}>
        <img src={cartLogo} alt="" />
        <h3>Your shopping cart</h3>
      </div>
      <div className={styles.right}>
        {!data?.user.cart[0] ? (
          <h3 className={styles.empty}>
            Seems like your cart is empty at the moment. Get shopping now!
          </h3>
        ) : (
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
                <h4>Total: {loading ? '0' : calcSum()} EUR</h4>
              </td>
              <td>
                <button className={`btn`} onClick={() => order()}>
                  ORDER
                </button>
              </td>
            </tr>
          </table>
        )}
      </div>
    </div>
  );
};

export default Cart;
