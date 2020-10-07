import React, { useState } from 'react';
import { useMutation } from 'react-apollo';
import styles from './signUp.module.css';

import Form from '../../components/form/form';
import { signUpQuery } from '../../queries/user-queries';

interface signUpVariables {
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
  const [signUp] = useMutation<signUpData, signUpVariables>(signUpQuery, {
    variables: {
      username: formValues.Username,
      email: formValues.Email,
      password: formValues.Password,
    },
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await signUp();
    if (res.errors) {
      console.log(res.errors);
      return;
    }
    if (res.data) {
      window.location.replace('/login');
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
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        placeholders={false}
        userData={null}
        closeBtn={false}
        closeModal={() => {}}
      />
    </div>
  );
}
