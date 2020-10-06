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

// NEED TO FIX SO FORMVALUES INTERFACE WORKS

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

  const handleClick = async (e: any) => {
    e.preventDefault();
    const res = await signUp();

    if (res.errors) {
      console.log(res.errors);
      return;
    } else if (res.data) {
      window.location.reload();
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
      placeholders={false}
      userData={null}
    />
  );
}
