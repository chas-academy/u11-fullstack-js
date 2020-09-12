import React from "react";
import styles from "./dashboard.module.css";

import User from "./user/user";

const Dashboard = () => {
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
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
        </table>
        <button className={`${styles.button} btn`}>+</button>
      </div>
    </div>
  );
};

export default Dashboard;
