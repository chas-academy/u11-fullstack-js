import React from "react";
import styles from "./home.module.css";

import Header from "../../components/header/header";
import SearchBar from "../../components/searchBar/searchBar";
import Navbar from "../../components/navbar/navbar";

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.top}>
        <SearchBar />
        <Navbar currentPage={"home"} />
      </div>
    </>
  );
};

export default Home;
