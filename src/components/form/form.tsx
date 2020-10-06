import userEvent from '@testing-library/user-event';
import React from 'react';
import styles from './form.module.css';

interface FromProps {
  title: string;
  fields: string[];
  infoTop: string;
  infoBot: string;
  btnTxt: string;
  handleClick: Function;
  handleChange: Function;
  placeholders: boolean;
  userData: any;
}

interface UserData {
  email: string;
  username: string;
  password: string;
}

const Form = (props: FromProps) => {
  return (
    <div className={`${styles.container} bg-primary shadowed form-container`}>
      <h2>{props.title}</h2>
      {props.infoTop !== '' ? <p>{props.infoTop}</p> : null}
      <form action="">
        {props.fields.map((field, i) => {
          return (
            <>
              <label className="noClose" htmlFor={field}>
                {field}
              </label>
              <input
                className="noClose"
                type="text"
                name={field}
                onChange={(e: any) => props.handleChange(e)}
                placeholder={props.placeholders && props.userData ? '' : ''}
              />
            </>
          );
        })}
        <button className="btn noClose" onClick={(e) => props.handleClick(e)}>
          {props.btnTxt}
        </button>
        {props.infoBot !== '' ? <p>{props.infoBot}</p> : null}
      </form>
    </div>
  );
};

export default Form;
