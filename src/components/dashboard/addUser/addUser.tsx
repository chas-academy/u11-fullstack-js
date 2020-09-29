import React from 'react'

import Form from '../../form/form'

const AddUser = () => {
  const handleClick = (e: any) => {
    e.preventDefault()
  }

  return (
    <Form
      title={'Add User'}
      fields={['Email', 'Username', 'Password']}
      infoTop={''}
      infoBot={''}
      btnTxt={'Add'}
      handleClick={handleClick}
    />
  )
}

export default AddUser
