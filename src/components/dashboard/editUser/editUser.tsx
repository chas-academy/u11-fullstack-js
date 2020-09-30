import React, { useState } from 'react';

import Form from '../../form/form';

const EditUser = () => {
  const [formValues, setFormValues] = useState({});

  const handleClick = (e: any) => {
    e.preventDefault();
  };

  const handleChange = (e: any) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <Form
      title={'Edit User'}
      fields={['Email', 'Username', 'Password']}
      infoTop={''}
      infoBot={''}
      btnTxt={'Edit'}
      handleClick={handleClick}
      handleChange={handleChange}
    />
  );
};

export default EditUser;
