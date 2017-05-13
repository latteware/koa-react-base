import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { usersActions } from 'core/users'

class Users extends Component {
  async componentWillMount () {
    const { fetch } = this.props

    await fetch()
  }

  render () {
    const { loaded, error, users, total } = this.props

    if (!loaded) {
      return (<div>Loading</div>)
    }

    if (error) {
      return (<div>{error}</div>)
    }

    return (
      <div>
        Users ({total})
        {users.map(u => (<div>
          <Link key={u.uuid} to={'/users/' + u.uuid}>{u.email}</Link>
        </div>))}
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    loaded: state.users.loadedList,
    error: state.users.loadedListError,
    users: state.users.list,
    total: state.users.total
  }
}

const mapDispatchToProps = {
  fetch: usersActions.fetch
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)
