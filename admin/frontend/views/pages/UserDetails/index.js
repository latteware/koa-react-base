import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { usersActions } from 'core/users'

class UserDetails extends Component {
  async componentWillMount () {
    const { fetchUser, params } = this.props

    await fetchUser(params.uuid)
  }

  render () {
    const { loaded, error, user } = this.props

    if (!loaded) {
      return (<div>Loading</div>)
    }

    if (error) {
      return (<div>
        <Link to='/users'>Back</Link>
        <p>{error}</p>
      </div>)
    }

    return (
      <div>
        <div><Link to='/users'>Back</Link></div>
        Hi to {user.email}
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    loaded: state.users.loadedUser,
    error: state.users.loadedUserError,
    user: state.users.currentUser
  }
}

const mapDispatchToProps = {
  fetchUser: usersActions.fetchUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetails)
