import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/">Home</Link>
        </li>
        <li
          className={
            props.currentPage === "dashboard" ? styles.current : undefined
          }
        >
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className={props.currentPage === "contact" ? "current" : undefined}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
