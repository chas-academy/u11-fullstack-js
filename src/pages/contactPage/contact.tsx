import React from "react";
import styles from "./contact.module.css";

import Contact from "../../components/contact/contact";
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";

const ContactPage = () => {
  return (
    <>
      <Header />
      <div className={styles.top}>
        <Navbar currentPage={"contact"} />
      </div>
      <Contact />
    </>
  );
};

export default ContactPage;
