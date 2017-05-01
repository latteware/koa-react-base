import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sessionActions } from 'core/session'
import SignUpForm from 'views/components/SignUpForm'
import styles from './style.css'

class SignUp extends Component {
  render () {
    const { signUp } = this.props

    return (
      <div className={styles.page}>
        <SignUpForm
          onSubmit={(values) => signUp(values)}
        />
      </div>
    )
  }
}

const mapDispatchToProps = {
  signUp: sessionActions.signUp
}

export default connect(
  null,
  mapDispatchToProps
)(SignUp)
