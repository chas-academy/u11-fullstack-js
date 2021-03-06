import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-apollo';

import styles from '../../form/form.module.css';
import { updateUserQuery, getUserByIdQuery } from '../../../queries/user-queries';

interface editProps {
  closeModal: Function;
}

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
  props: editProps,
  initialValues: any = {
    Username: '',
    Email: '',
    id: '',
    Password: '',
  }
) {
  let id: any = '';
  if (sessionStorage.getItem('userID')) {
    id = sessionStorage.getItem('userID');
  }
  const [formValues, setFormValues] = useState(initialValues);
  const { data: userData } = useQuery<userData, userVariables>(getUserByIdQuery, {
    variables: {
      id: sessionStorage.getItem('userID'),
    },
    onCompleted: () => {
      setFormValues({
        id: id,
        Username: userData?.userById.username,
        Email: userData?.userById.username,
        Password: userData?.userById.password,
      });
    },
  });
  const [updateUser] = useMutation<updatedData, updateVariables>(updateUserQuery, {
    variables: {
      id: id,
      username: formValues.Username,
      password: formValues.Password,
    },
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await updateUser();

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

  let user;
  if (userData) {
    user = userData.userById;
  } else {
    user = null;
  }

  return (
    <div className={`${styles.container} bg-primary shadowed form-container`}>
      <h2>Edit User</h2>
      <div className={styles.close} onClick={() => props.closeModal()}>
        X
      </div>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <label className="noClose" htmlFor="Email">
          Email
        </label>
        <input
          className="noClose"
          type="text"
          name="Email"
          onChange={(e) => handleChange(e)}
          value={user?.email}
          readOnly
          disabled
        />
        <label className="noClose" htmlFor="Username">
          Username
        </label>
        <input
          className="noClose"
          required
          type="text"
          name="Username"
          onChange={(e) => handleChange(e)}
          defaultValue={formValues.Username}
        />
        <label className="noClose" htmlFor="Password">
          Password
        </label>
        <input
          className="noClose"
          required
          type="password"
          name="Password"
          onChange={(e) => handleChange(e)}
          defaultValue={formValues!.Password}
        />
        <button className="btn noClose">Edit</button>
      </form>
    </div>
  );
}
