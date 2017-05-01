import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sessionActions } from 'core/session'
import RequestPasswordForm from 'views/components/RequestPasswordForm'
import styles from './style.css'

class ResetPassword extends Component {
  render () {
    const { requestPassword } = this.props

    return (
      <div className={styles.page}>
        <RequestPasswordForm
          onSubmit={(values) => requestPassword(values)}
        />
      </div>
    )
  }
}

const mapDispatchToProps = {
  requestPassword: sessionActions.requestPassword
}

export default connect(
  null,
  mapDispatchToProps
)(ResetPassword)
