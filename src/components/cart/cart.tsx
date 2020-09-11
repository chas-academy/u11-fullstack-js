import React from "react";
import styles from "./cart.module.css";
import cartLogo from "../../images/cart.jpg";
import CartItem from "./cartItem/cartItem";

const Cart = () => {
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
          <CartItem />
          <CartItem />
          <CartItem />
          <tr className={styles.tableFooter}>
            <td colSpan={3}>
              <h4>Total: 6000.00 EUR</h4>
            </td>
            <td>
              <button className={`btn`}>REMOVE</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Cart;
