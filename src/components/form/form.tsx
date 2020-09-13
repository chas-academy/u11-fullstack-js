import React from "react";
import styles from "./form.module.css";

interface FromProps {
  title: string;
  fields: string[];
  infoTop: string;
  infoBot: string;
  btnTxt: string;
}

const Form = (props: FromProps) => {
  return (
    <div className={`${styles.container} bg-primary shadowed`}>
      <h2>{props.title}</h2>
      {props.infoTop !== "" ? <p>{props.infoTop}</p> : null}
      <form action="">
        {props.fields.map((field, i) => {
          return (
            <>
              <label htmlFor={field}>{field}</label>
              <input type="text" name={field} />
            </>
          );
        })}
        <button className="btn">{props.btnTxt}</button>
        {props.infoBot !== "" ? <p>{props.infoBot}</p> : null}
      </form>
    </div>
  );
};

export default Form;
