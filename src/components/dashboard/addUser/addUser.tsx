import React, { useState } from 'react';
import { useMutation } from 'react-apollo';

import Form from '../../form/form';
import { signUpQuery } from '../../../queries/user-queries';

interface addProps {
  closeModal: Function;
}

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

export default function AddUser(
  props: addProps,
  initialValues: any = {
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
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      placeholders={false}
      userData={null}
      closeBtn={true}
      closeModal={props.closeModal}
    />
  );
}
