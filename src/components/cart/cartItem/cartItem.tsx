import React from "react";

const CartItem = () => {
  return (
    <tr>
      <td>
        <button className={`btn`}>X</button>
      </td>
      <td>20</td>
      <td>Alpha Boost</td>
      <td>2000.00 EUR</td>
    </tr>
  );
};

export default CartItem;
