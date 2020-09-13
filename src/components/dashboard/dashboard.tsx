import React, { useState } from "react";
import styles from "./dashboard.module.css";

import User from "./user/user";
import AddUser from "./addUser/addUser";
import EditUser from "./editUser/editUser";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState({
    addUser: false,
    editUser: false,
  });

  const showHoverBox = (e: any) => {
    e.preventDefault();
    if (e.target.id === "addUser") {
      setIsOpen({ addUser: true, editUser: false });
    }
    if (e.target.id === "editUser") {
      setIsOpen({ addUser: false, editUser: true });
    }
    return;
  };

  window.onclick = function (e: any) {
    if (
      !e.target.matches(".form-container") &&
      !e.target.matches("#addUser") &&
      !e.target.matches("#editUser") &&
      !e.target.matches(".noClose")
    ) {
      setIsOpen({ addUser: false, editUser: false });
    }
  };

  return (
    <div className={`${styles.container} bg-primary shadowed`}>
      <div className={styles.left}>
        <h3>Admin Babryz</h3>
        <hr />
        <div className={styles.category}>
          <h4>Users</h4>
          <i className="fas fa-users fa-2x"></i>
        </div>
      </div>
      <div className={styles.right}>
        <table>
          <thead>
            <th>Username</th>
            <th colSpan={3}>Email</th>
          </thead>
          <User showHoverBox={showHoverBox} />
          <User showHoverBox={showHoverBox} />
          <User showHoverBox={showHoverBox} />
        </table>
        <button
          className={`${styles.button} btn`}
          id="addUser"
          onClick={(e) => showHoverBox(e)}
        >
          +
        </button>
        {isOpen.addUser ? (
          <div className={styles.form}>
            <AddUser />
          </div>
        ) : null}
        {isOpen.editUser ? (
          <div className={styles.form}>
            <EditUser />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Dashboard;
