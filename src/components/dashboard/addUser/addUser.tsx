import React, { useState } from 'react';
import { useMutation } from 'react-apollo';

import Form from '../../form/form';
import { signUpQuery } from '../../../queries/user-queries';

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

export default function AddUser(
  initialValues: any = {
    Username: '',
    Email: '',
    Password: '',
  }
) {
  const [formValues, setFormValues] = useState(initialValues);
  const [signUp, { error, data }] = useMutation<signUpData, signUpVariables>(signUpQuery, {
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
      window.location.reload();
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
    <Form
      title={'Add User'}
      fields={['Email', 'Username', 'Password']}
      infoTop={''}
      infoBot={''}
      btnTxt={'Add'}
      handleClick={handleClick}
      handleChange={handleChange}
    />
  );
}
