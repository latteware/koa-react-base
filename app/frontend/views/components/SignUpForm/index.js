import React from 'react'
import classNames from 'classnames/bind'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import styles from './style.css'

const cx = classNames.bind(styles)
const formId = 'signUp'

class SignUpForm extends React.Component {
  render () {
    const { handleSubmit, error, submitting, password, confirmPassword } = this.props
    var hasError = false
    var isEmpty = false
    if (!confirmPassword) {
      hasError = false
    } else if (password !== confirmPassword) {
      hasError = true
    }

    if (!confirmPassword) { isEmpty = true }

    return (
      <form className={cx('box', 'form')} onSubmit={handleSubmit}>
        <h5 className='title is-5 has-text-centered'>Sign up with your e-mail</h5>

        <p className='control'>
          <Field
            name='screenName'
            className='input'
            component='input'
            placeholder='Nickname'
            required
          />
        </p>

        <p className='control'>
          <Field
            name='displayName'
            className='input'
            placeholder='Name'
            component='input'
            required
          />
        </p>

        <p className='control'>
          <Field
            name='email'
            type='email'
            className='input'
            component='input'
            placeholder='E-mail'
            required
          />
        </p>

        <p className='control'>
          <Field
            name='password'
            type='password'
            className='input'
            component='input'
            placeholder='Password'
            required
          />
        </p>

        <p className='control'>
          <Field
            name='confirmPassword'
            type='password'
            className={cx('input', { 'is-danger': hasError })}
            component='input'
            placeholder='Password Confirmation'
            required
          />
        </p>

        {!error ? null : (
          <span className='help is-danger has-text-centered'>{error}</span>
        )}

        <div style={{ textAlign: 'right' }}>
          { !hasError && !isEmpty
            ? <button type='submit' className={cx('button is-primary', { 'is-loading': submitting })}>Sign up</button>
            : <button type='submit' className='button is-primary' disabled>Sign Up</button>
          }
        </div>
      </form>
    )
  }
}

var SignUpFormComponent = reduxForm({
  form: formId
})(SignUpForm)

const selector = formValueSelector(formId)

SignUpFormComponent = connect(state => {
  return {
    password: selector(state, 'password'),
    confirmPassword: selector(state, 'confirmPassword')
  }
})(SignUpFormComponent)

export default SignUpFormComponent
