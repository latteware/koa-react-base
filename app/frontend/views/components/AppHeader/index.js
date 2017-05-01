import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { sessionActions } from 'core/session'

class Header extends React.Component {
  render () {
    return (
      <nav className='nav has-shadow'>
        <div className='container'>
          <div className='nav-left'>
            <Link className='nav-item is-tab' to='/app'>Home</Link>
            <Link className='nav-item is-tab' to='/users'>Users</Link>
          </div>

          <div className='nav-right'>
            <a className='nav-item is-tab' onClick={() => this.props.logout()}>Logout</a>
          </div>
        </div>
      </nav>
    )
  }
}

const mapDispatchToProps = {
  logout: sessionActions.logout
}

export default connect(
  null,
  mapDispatchToProps
)(Header)
