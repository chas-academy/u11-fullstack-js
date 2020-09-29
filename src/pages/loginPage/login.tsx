import React from 'react'
import styles from './login.module.css'
import { useMutation } from 'react-apollo'

import Form from '../../components/form/form'
import { loginQuery } from '../../queries/user-queries'

interface loginDetails {
  email: string
  password: string
}

export default function LoginPage() {
  const handleClick = (e: any) => {
    e.preventDefault()
  }

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
  )
}
