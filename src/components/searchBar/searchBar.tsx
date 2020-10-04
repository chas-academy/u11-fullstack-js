import React from 'react';
import styles from './searchBar.module.css';
import SearchIcon from '../../images/magnifying-glass.png';

interface searchProps {
  search: Function;
}

const SearchBar = (props: searchProps) => {
  return (
    <>
      <form action="" className={styles.inputForm} onSubmit={(e) => e.preventDefault()}>
        <img src={SearchIcon} alt="" />
        <input type="text" placeholder="Search by item name" onKeyDown={(e) => props.search(e)} />
      </form>
    </>
  );
};

export default SearchBar;
