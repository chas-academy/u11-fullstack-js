import React from "react";
import { isPropertySignature } from "typescript";

interface UserProps {
  showHoverBox: Function;
}

const User = (props: UserProps) => {
  return (
    <tr>
      <td>Babryz</td>
      <td>babryzyt@gmail.com</td>
      <td>
        <button
          className="btn"
          onClick={(e) => props.showHoverBox(e)}
          id="editUser"
        >
          EDIT
        </button>
      </td>
      <td>
        <button className="btn">REMOVE</button>
      </td>
    </tr>
  );
};

export default User;
