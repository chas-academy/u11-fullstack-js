import React from 'react'
import styles from './signUp.module.css'

import Form from '../../components/form/form'

const SignUpPage = () => {
  const handleClick = (e: any) => {
    e.preventDefault()
  }

  return (
    <div className={styles.container}>
      <Form
        title={'Sign Up'}
        fields={['Email', 'Username', 'Password']}
        infoTop={'It’s free and only takes a minute'}
        infoBot={
          'By clicking the Sign Up button, you agree to our Terms & Conditions and Privacy Policy'
        }
        btnTxt={'Sign Up'}
        handleClick={handleClick}
      />
    </div>
  )
}

export default SignUpPage
