import React from "react";
import styles from "./items.module.css";
import Item from "./item/item";

const Items = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Showing top items</h3>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default Items;
