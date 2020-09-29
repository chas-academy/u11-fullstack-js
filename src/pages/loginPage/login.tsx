import React from 'react';
import styles from './login.module.css';
import { useQuery, useMutation } from 'react-apollo';

import Form from '../../components/form/form';
import { loginQuery } from '../../queries/user-queries';
import { createEmitAndSemanticDiagnosticsBuilderProgram } from 'typescript';

interface loginVariables {
  email: string;
  password: string;
}

interface loginData {
  login: {
    accessToken: string;
  };
}

export default function LoginPage() {
  const [login, { error, data }] = useMutation<loginData, loginVariables>(loginQuery, {
    variables: { email: 'babryzyt@gmail.com', password: 'changed' },
  });

  const handleClick = (e: any) => {
    e.preventDefault();
    login();
    console.log(data);
    if (data) {
      localStorage.setItem('accessToken', data!.login.accessToken);
      window.location.replace('/');
    }
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
      />
    </div>
  );
}
