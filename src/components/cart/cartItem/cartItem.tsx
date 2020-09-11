import React from "react";
import styles from "./cartItem.module.css";

const CartItem = () => {
  return (
    <tr className={styles.container}>
      <td>
        <button className={`btn`}>REMOVE</button>
      </td>
      <td>20</td>
      <td>Alpha Boost</td>
      <td>2000.00 EUR</td>
    </tr>
  );
};

export default CartItem;
