import React, { useState, FunctionComponent } from 'react';
import styles from './login.module.css';
import { useMutation } from 'react-apollo';

import Form from '../../components/form/form';
import { loginQuery } from '../../queries/user-queries';

interface loginVariables {
  email: string;
  password: string;
}

interface loginData {
  login: {
    accessToken: string;
  };
}

interface formValues {
  Email: string;
  Password: string;
}

export default function LoginPage(
  initialValues: formValues = {
    Email: '',
    Password: '',
  }
) {
  const [formValues, setFormValues] = useState(initialValues);
  const [login, { error, data }] = useMutation<loginData, loginVariables>(loginQuery, {
    variables: { email: formValues.Email, password: formValues.Password },
  });

  const handleClick = (e: any) => {
    e.preventDefault();
    login();
    if (data) {
      console.log(data);
      localStorage.setItem('accessToken', data!.login.accessToken);
      window.location.replace('/');
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
        title={'Log In'}
        fields={['Email', 'Password']}
        infoTop={''}
        infoBot={''}
        btnTxt={'Log In'}
        handleClick={handleClick}
        handleChange={handleChange}
      />
    </div>
  );
}
