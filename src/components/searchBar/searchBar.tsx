import React from "react";
import styles from "./searchBar.module.css";
import SearchIcon from "../../images/magnifying-glass.png";

const SearchBar = () => {
  return (
    <>
      <form action="" className={styles.inputForm}>
        <img src={SearchIcon} alt="" />
        <input type="text" placeholder="Search by item name" />
      </form>
    </>
  );
};

export default SearchBar;
