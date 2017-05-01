import React from 'react'
import classNames from 'classnames/bind'
import { Field, reduxForm } from 'redux-form'
import styles from './style.css'
import { Link } from 'react-router'

const cx = classNames.bind(styles)

class RequestPasswordForm extends React.Component {
  render () {
    const { handleSubmit, error, submitting, submitSucceeded } = this.props

    if (submitSucceeded) {
      return <form className={cx('box', 'form')}>
        <h5 className='title is-5 has-text-centered'>E-mail sended, please check your inbox.</h5>
        <Link className='button is-primary' to='/'>
          <span>Back to home</span>
        </Link>
      </form>
    }

    return (
      <form className={cx('box', 'form')} onSubmit={handleSubmit}>
        <h5 className='title is-5 has-text-centered'>Reset password by e-mail</h5>

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

        {!error ? null : (
          <span className='help is-danger has-text-centered'>{error}</span>
        )}

        <div style={{ textAlign: 'right' }}>
          <button type='submit' className={cx('button is-primary', { 'is-loading': submitting })}>Reset password</button>
        </div>

        { this.props.children }
      </form>
    )
  }
}

export default reduxForm({
  form: 'requestPassword'
})(RequestPasswordForm)
