import React, { useState } from 'react';
import styles from './signUp.module.css';

import Form from '../../components/form/form';

const SignUpPage = () => {
  const [formValues, setFormValues] = useState({});

  const handleClick = (e: any) => {
    e.preventDefault();
  };

  const handleChange = (e: any) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className={styles.container}>
      <Form
        title={'Sign Up'}
        fields={['Email', 'Username', 'Password']}
        infoTop={'It’s free and only takes a minute'}
        infoBot={
          'By clicking the Sign Up button, you agree to our Terms & Conditions and Privacy Policy'
        }
        btnTxt={'Sign Up'}
        handleClick={handleClick}
        handleChange={handleChange}
      />
    </div>
  );
};

export default SignUpPage;
