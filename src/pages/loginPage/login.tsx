import React from "react";
import styles from "./login.module.css";

import Form from "../../components/form/form";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <Form
        title={"Log In"}
        fields={["Email", "Password"]}
        infoTop={""}
        infoBot={""}
        btnTxt={"Log In"}
      />
    </div>
  );
};

export default LoginPage;
