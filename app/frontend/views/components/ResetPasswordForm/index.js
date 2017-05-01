import React from 'react'
import classNames from 'classnames/bind'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import styles from './style.css'

const cx = classNames.bind(styles)
const formId = 'resetPassword'

class ResetPasswordForm extends React.Component {
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
        <h5 className='title is-5 has-text-centered'>Reset password</h5>
        <p>Type yout new password twice</p>

        <p className='control'>
          <Field
            name='password'
            component='input'
            type='password'
            className='input'
            placeholder='Something that you can remember'
            required
          />
        </p>

        <p className='control'>
          <Field
            name='confirmPassword'
            component='input'
            type='password'
            className={cx('input', { 'is-danger': hasError })}
            placeholder='Confirm your password'
            required
          />
        </p>

        {!error ? null : (
          <span className='help is-danger has-text-centered'>{error}</span>
        )}

        <div style={{ textAlign: 'right' }}>
          { !hasError && !isEmpty
            ? <button type='submit' className={cx('button is-primary', { 'is-loading': submitting })}>Reset password</button>
            : <button type='submit' className='button is-primary' disabled>Reset password</button>
          }
        </div>

        { this.props.children }
      </form>
    )
  }
}

var ResetPasswordFormComponent = reduxForm({
  form: formId
})(ResetPasswordForm)

const selector = formValueSelector(formId)
ResetPasswordFormComponent = connect(state => {
  return {
    password: selector(state, 'password'),
    confirmPassword: selector(state, 'confirmPassword')
  }
})(ResetPasswordFormComponent)

export default ResetPasswordFormComponent
