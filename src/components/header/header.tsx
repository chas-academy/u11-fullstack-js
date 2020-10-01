import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-apollo';

import styles from './header.module.css';
import Cart from '../../images/cart.jpg';
import { getUserQuery } from '../../queries/user-queries';

interface userData {
  user: {
    username: string;
    email: string;
    admin: string;
    cart: string;
  };
}

interface userVariables {
  accessToken: string;
}

const Header = () => {
  let token: any = '';
  if (localStorage.getItem('accessToken')) {
    token = localStorage.getItem('accessToken');
  }

  const { error, loading, data } = useQuery<userData, userVariables>(getUserQuery, {
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

  const logOut = () => {
    localStorage.removeItem('accessToken');
    window.location.reload();
  };

  return (
    <header className={`${styles.header} bg-primary shadowed`}>
      <div className={styles.logo}>
        <h1>
          <Link to="/">RL Item Shop</Link>
        </h1>
      </div>
      {localStorage.getItem('accessToken') ? (
        <div className={styles.buttons}>
          <Link to="/cart">
            <img src={Cart} alt="" />
          </Link>
          <div>
            <b>{data?.user.email}</b>
          </div>
          <button className={`btn`} onClick={() => logOut()}>
            Sign Out
          </button>
        </div>
      ) : (
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
      )}
    </header>
  );
};

export default Header;
