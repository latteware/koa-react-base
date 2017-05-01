import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sessionActions } from 'core/session'
import ResetPasswordForm from 'views/components/ResetPasswordForm'
import styles from './style.css'

class ResetPassword extends Component {
  render () {
    const { resetPassword, location } = this.props

    return (
      <div className={styles.page}>
        <ResetPasswordForm
          onSubmit={(values) => resetPassword({...location.query, ...values})}
        />
      </div>
    )
  }
}

const mapDispatchToProps = {
  resetPassword: sessionActions.resetPassword
}

export default connect(
  null,
  mapDispatchToProps
)(ResetPassword)
