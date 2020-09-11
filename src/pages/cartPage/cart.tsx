import React from "react";
import styles from "./cart.module.css";

import Header from "../../components/header/header";
import Navbar from "../../components/navbar/navbar";
import Cart from "../../components/cart/cart";

const CartPage = () => {
  return (
    <>
      <Header />
      <div className={styles.top}>
        <Navbar currentPage={"cart"} />
      </div>
      <Cart />
    </>
  );
};

export default CartPage;
