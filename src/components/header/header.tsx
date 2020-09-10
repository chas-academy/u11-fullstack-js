import React from "react";
import styles from "./header.module.css";
import Cart from "../../images/cart.jpg";

const Header = () => {
  return (
    <header className={`${styles.header} bg-primary shadowed`}>
      <div className={styles.logo}>
        <h1>RL Item Shop</h1>
      </div>
      <div className={styles.buttons}>
        <img src={Cart} alt="" />
        <button className={`btn`}>Sign Up</button>
        <button className={`btn`}>Log In</button>
      </div>
    </header>
  );
};

export default Header;
