import React from "react";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={`${styles.container} bg-primary shadowed`}>
      <div className={styles.left}>
        <h3>Admin Babryz</h3>
        <hr />
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default Dashboard;
