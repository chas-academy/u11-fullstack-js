import React from "react";

import Form from "../../form/form";

const AddUser = () => {
  return (
    <Form
      title={"Add User"}
      fields={["Email", "Username", "Password"]}
      infoTop={""}
      infoBot={""}
      btnTxt={"Add"}
    />
  );
};

export default AddUser;
