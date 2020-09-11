import React from "react";
import styles from "./item.module.css";
import ItemPic from "../../../images/Dominus_body_icon.png";

const Item = () => {
  return (
    <div className={`${styles.container} bg-primary shadowed`}>
      <h4>Item Name</h4>
      <img src={ItemPic} alt="" />
      <p>Category: Body</p>
      <p>Price: 2 EUR</p>
      <button className={`btn`}>Add To Cart</button>
    </div>
  );
};

export default Item;
