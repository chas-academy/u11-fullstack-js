import React from "react";
import styles from "./orderConfirmation.module.css";

import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import OrderConfirmation from "../../components/orderConfirmation/orderConfirmation";

const OrderConfirmationPage = () => {
  return (
    <>
      <Header />
      <div className={styles.top}>
        <Navbar currentPage={"order"} />
      </div>
      <OrderConfirmation />
    </>
  );
};

export default OrderConfirmationPage;
