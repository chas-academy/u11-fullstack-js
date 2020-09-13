import React from "react";

import Form from "../../form/form";

const EditUser = () => {
  return (
    <Form
      title={"Edit User"}
      fields={["Email", "Username", "Password"]}
      infoTop={""}
      infoBot={""}
      btnTxt={"Edit"}
    />
  );
};

export default EditUser;
