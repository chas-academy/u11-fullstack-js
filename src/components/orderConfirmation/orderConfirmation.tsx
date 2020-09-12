import React from "react";
import styles from "./orderConfirmation.module.css";

import OrderItem from "./orderItem/orderItem";

const OrderConfirmation = () => {
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
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <tr className={styles.footer}>
          <td colSpan={2}>
            <h4>Total: </h4>
          </td>
          <td>
            <h4>6000.00 EUR</h4>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default OrderConfirmation;
