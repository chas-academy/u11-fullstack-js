import React, { useState } from 'react';
import { useMutation } from 'react-apollo';
import styles from './signUp.module.css';

import Form from '../../components/form/form';
import { signUpQuery } from '../../queries/user-queries';

interface loginVariables {
  username: string;
  email: string;
  password: string;
}

interface signUpData {
  signUp: {
    username: string;
    admin: boolean;
  };
}

interface formValues {
  Username: string;
  Email: string;
  Password: string;
}

export default function SignUpPage(
  initialValues: formValues = {
    Username: '',
    Email: '',
    Password: '',
  }
) {
  const [formValues, setFormValues] = useState(initialValues);
  const [signUp, { error, data }] = useMutation<signUpData, loginVariables>(signUpQuery, {
    variables: {
      username: formValues.Username,
      email: formValues.Email,
      password: formValues.Password,
    },
  });

  const handleClick = (e: any) => {
    e.preventDefault();
    signUp();
    if (data) {
      window.location.replace('/login');
    } else if (error) {
      console.log(error);
    }
  };

  const handleChange = (e: any) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
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
}
