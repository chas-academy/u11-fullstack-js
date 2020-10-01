import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-apollo';

import Form from '../../form/form';
import { updateUserQuery, getUserByIdQuery } from '../../../queries/user-queries';

interface userData {
  userById: {
    username: string;
    email: string;
    password: string;
  };
}

interface userVariables {
  id: string | null;
}

interface updatedData {
  user: {
    username: string;
    password: string;
  };
}

interface updateVariables {
  id: string;
  username: string;
  password: string;
}

export default function EditUser(
  initialValues: any = {
    Username: '',
    id: '',
    Password: '',
  }
) {
  const [formValues, setFormValues] = useState(initialValues);
  const { error: userError, data: userData } = useQuery<userData, userVariables>(getUserByIdQuery, {
    variables: {
      id: sessionStorage.getItem('userID'),
    },
    onCompleted: () => {
      console.log(userData);
    },
    onError: () => {
      console.log(sessionStorage.getItem('userID'));
    },
  });
  const [updateUser, { error, data }] = useMutation<updatedData, updateVariables>(updateUserQuery, {
    variables: {
      id: formValues.Id,
      username: formValues.Username,
      password: formValues.Password,
    },
  });

  const handleClick = (e: any) => {
    e.preventDefault();
    updateUser();
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

  let user;
  if (userData) {
    user = userData.userById;
  } else {
    user = null;
  }

  return (
    <Form
      title={'Edit User'}
      fields={['Email', 'Username', 'Password']}
      infoTop={''}
      infoBot={''}
      btnTxt={'Edit'}
      handleClick={handleClick}
      handleChange={handleChange}
      placeholders={true}
      userData={user}
    />
  );
}
