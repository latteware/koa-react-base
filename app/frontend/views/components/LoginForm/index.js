import React from 'react'
import classNames from 'classnames/bind'
import { Field, reduxForm } from 'redux-form'
import styles from './style.css'

const cx = classNames.bind(styles)

class LoginForm extends React.Component {
  render () {
    const { handleSubmit, error, submitting } = this.props

    return (
      <form className={cx('box', 'form')} onSubmit={handleSubmit}>
        <h5 className='title is-5 has-text-centered'>Sign in with your e-mail</h5>

        <p className='control'>
          <Field
            name='email'
            component='input'
            type='email'
            className='input'
            placeholder='E-mail'
            required
          />
        </p>

        <p className='control'>
          <Field
            name='password'
            component='input'
            type='password'
            className='input'
            placeholder='Password'
          />
        </p>

        {!error ? null : (
          <span className='help is-danger has-text-centered'>{error}</span>
        )}

        <div style={{ textAlign: 'right' }}>
          <button type='submit' className={cx('button is-primary', { 'is-loading': submitting })}>Log in</button>
        </div>

        { this.props.children }
      </form>
    )
  }
}

export default reduxForm({
  form: 'login'
})(LoginForm)
