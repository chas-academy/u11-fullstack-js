import React from "react";
import { Link } from "react-router-dom";

import styles from "./header.module.css";
import Cart from "../../images/cart.jpg";

const Header = () => {
  return (
    <header className={`${styles.header} bg-primary shadowed`}>
      <div className={styles.logo}>
        <h1>
          <Link to="/">RL Item Shop</Link>
        </h1>
      </div>
      <div className={styles.buttons}>
        <Link to="/cart">
          <img src={Cart} alt="" />
        </Link>
        <button className={`btn`}>
          <Link to="/signUp">Sign Up</Link>
        </button>
        <button className={`btn`}>
          <Link to="/login">Log In</Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
