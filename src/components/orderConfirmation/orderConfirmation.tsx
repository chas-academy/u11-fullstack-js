import React from 'react';
import { useQuery } from 'react-apollo';

import styles from './orderConfirmation.module.css';
import OrderItem from './orderItem/orderItem';
import { getOrderQuery } from '../../queries/product-queries';

interface orderVariables {
  accessToken: string;
}

interface orderData {
  order: {
    id: string;
    date: string;
    items: item[];
  };
}

interface item {
  name: string;
  price: number;
  quantity: number;
}

const OrderConfirmation = () => {
  let sum: number;
  let token: any = '';
  if (localStorage.getItem('accessToken')) {
    token = localStorage.getItem('accessToken');
  }

  const { loading, data } = useQuery<orderData, orderVariables>(getOrderQuery, {
    variables: {
      accessToken: token,
    },
  });
  const calcSum = () => {
    if (data) {
      if (data.order.items.length < 1) {
        return 0;
      }
      let priceArray = [];
      for (let i = 0; i < data!.order.items.length; i++) {
        priceArray.push(data?.order.items[i].price);
      }
      sum = priceArray.reduce((total: any, currentValue: any) => {
        return (total += currentValue);
      });
      return sum;
    }
  };
  return (
    <div className={`${styles.container} bg-primary shadowed`}>
      <h2>Thank you for your order!</h2>
      <hr />
      <table>
        <thead>
          <th>Item</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </thead>
        {loading ? (
          <h3>Loading Order...</h3>
        ) : (
          data?.order.items.map((item) => {
            return <OrderItem item={item} />;
          })
        )}
        <tr className={styles.footer}>
          <td colSpan={2}>
            <h4>Total: </h4>
          </td>
          <td>
            <h4>{calcSum()} EUR</h4>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default OrderConfirmation;
