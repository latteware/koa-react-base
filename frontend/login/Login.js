import React, { Component } from 'react'
import styles from './Login.css'

class Login extends Component {
  constructor () {
    super()

    const errorDiv = document.getElementById('error')
    if (errorDiv) {
      this.error = errorDiv.innerHTML
    }
  }

  render () {
    return (
      <div className={styles.page}>
        <form className={`box ${styles.form}`} method='post' action='/login'>
          <h5 className='title is-5 has-text-centered'>Sign in with your e-mail</h5>

          <p className='control'>
            <input
              name='email'
              className='input'
              placeholder='E-mail'
              required
              type='email'
            />
          </p>

          <p className='control'>
            <input
              name='password'
              className='input'
              placeholder='Password'
              type='password'
              required
            />
          </p>

          {!this.error ? null : (
            <span className='help is-danger has-text-centered'>{this.error}</span>
          )}

          <div style={{ textAlign: 'right' }}>
            <input type='submit' value='Log in' className='button is-primary' />
          </div>
        </form>
      </div>
    )
  }
}

export default Login
