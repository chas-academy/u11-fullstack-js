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
  };
}

interface userVariables {
  accessToken: string;
}

const Header = (initialState: any = localStorage.getItem('accessToken')) => {
  const [token, setToken] = useState(initialState);

  const { error, loading, data } = useQuery<userData, userVariables>(getUserQuery, {
    variables: {
      accessToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY3NDc2OTZlZWNlODgyMjcwOTg1ODIzIn0sImlhdCI6MTYwMTU4Nzk5NSwiZXhwIjoxNjAyMTkyNzk1fQ.vozQlAYsTyDYTPLtejjaHZI7-YDSrbwJ8A2P4cAkNCU',
    },
    onCompleted: () => {
      console.log(data);
    },
    onError: () => {
      console.log(error);
    },
  });

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
          <button className={`btn`}>
            <Link to="/login">Sign Out</Link>
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
