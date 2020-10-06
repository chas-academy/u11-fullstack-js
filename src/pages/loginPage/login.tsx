import React, { useState, useEffect } from 'react';
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

const LoginPage = (
  initialValues: formValues = {
    Email: '',
    Password: '',
  }
) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [login, { loading, error, data }] = useMutation<loginData, loginVariables>(loginQuery, {
    variables: {
      email: formValues.Email,
      password: formValues.Password,
    },
    onCompleted: () => {
      if (data) {
        setToken(data!.login.accessToken);
      }
    },
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await login();

    if (error) {
      console.log(error);
      return;
    }
    if (res.data) {
      setToken(res.data!.login.accessToken);
    }
  };

  const setToken = (token: string) => {
    localStorage.setItem('accessToken', token);
    window.location.replace('/');
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
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        placeholders={false}
        userData={null}
        closeBtn={false}
        closeModal={() => {}}
      />
    </div>
  );
};

export default LoginPage;
