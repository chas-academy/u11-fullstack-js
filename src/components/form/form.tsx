import React from 'react';
import styles from './form.module.css';

interface FromProps {
  title: string;
  fields: string[];
  infoTop: string;
  infoBot: string;
  btnTxt: string;
  handleSubmit: Function;
  handleChange: Function;
  placeholders: boolean;
  userData: any;
  closeBtn: boolean;
  closeModal: Function;
}

const Form = (props: FromProps) => {
  return (
    <div className={`${styles.container} bg-primary shadowed form-container`}>
      <h2>{props.title}</h2>
      {props.closeBtn ? (
        <div className={styles.close} onClick={() => props.closeModal()}>
          X
        </div>
      ) : null}
      {props.infoTop !== '' ? <p>{props.infoTop}</p> : null}
      <form action="" onSubmit={(e) => props.handleSubmit(e)}>
        {props.fields.map((field, i) => {
          return (
            <>
              <label className="noClose" htmlFor={field}>
                {field}
              </label>
              <input
                className="noClose"
                type={field === 'Password' ? 'password' : 'text'}
                name={field}
                onChange={(e: any) => props.handleChange(e)}
                placeholder={props.placeholders && props.userData ? '' : ''}
                required
              />
            </>
          );
        })}
        <button type="submit" className="btn noClose">
          {props.btnTxt}
        </button>
        {props.infoBot !== '' ? <p>{props.infoBot}</p> : null}
      </form>
    </div>
  );
};

export default Form;
