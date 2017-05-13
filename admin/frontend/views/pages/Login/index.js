import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sessionActions } from 'core/session'
import LoginForm from 'views/components/LoginForm'
import styles from './style.css'
import { Link } from 'react-router'

class Login extends Component {
  render () {
    const { login } = this.props

    return (
      <div className={styles.page}>
        <LoginForm
          onSubmit={(values) => login(values)}
        />
      </div>
    )
  }
}

const mapDispatchToProps = {
  login: sessionActions.login
}

export default connect(
  null,
  mapDispatchToProps
)(Login)
