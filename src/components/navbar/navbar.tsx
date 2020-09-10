import React from "react";
import styles from "./navbar.module.css";

interface navbarProps {
  currentPage: string;
}

const Navbar = (props: navbarProps) => {
  return (
    <div>
      <ul className={styles.container}>
        <li
          className={props.currentPage === "home" ? styles.current : undefined}
        >
          Home
        </li>
        <li
          className={
            props.currentPage === "dashboard" ? styles.current : undefined
          }
        >
          Dashboard
        </li>
        <li className={props.currentPage === "contact" ? "current" : undefined}>
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
