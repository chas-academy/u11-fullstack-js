import React from 'react'

import Form from '../../form/form'

const EditUser = () => {
  const handleClick = (e: any) => {
    e.preventDefault()
  }

  return (
    <Form
      title={'Edit User'}
      fields={['Email', 'Username', 'Password']}
      infoTop={''}
      infoBot={''}
      btnTxt={'Edit'}
      handleClick={handleClick}
    />
  )
}

export default EditUser
