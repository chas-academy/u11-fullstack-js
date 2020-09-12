import React from "react";
import styles from "./dashboard.module.css";

import Header from "../../components/header/header";
import Navbar from "../../components/navbar/navbar";
import Dashboard from "../../components/dashboard/dashboard";

const DashboardPage = () => {
  return (
    <>
      <Header />
      <div className={styles.top}>
        <Navbar currentPage={"dashboard"} />
      </div>
      <Dashboard />
    </>
  );
};

export default DashboardPage;
