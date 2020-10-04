import React, { useState } from 'react';
import styles from './home.module.css';

import Header from '../../components/header/header';
import SearchBar from '../../components/searchBar/searchBar';
import Navbar from '../../components/navbar/navbar';
import Items from '../../components/items/items';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const search = (e: any) => {
    if (e.key === 'Enter') {
      setSearchTerm(e.target.value);
      console.log(searchTerm);
    }
  };
  return (
    <>
      <Header />
      <div className={styles.top}>
        <SearchBar search={search} />
        <Navbar currentPage={'home'} />
      </div>
      <div className={styles.main}>
        <Items searchTerm={searchTerm} />
      </div>
    </>
  );
};

export default HomePage;
