import React from 'react'
import { Link } from 'react-router'

export default class Header extends React.Component {
  render () {
    return (
      <nav className='nav has-shadow'>
        <div className='container'>
          <div className='nav-left'>
            <Link className='nav-item is-tab' to='/'>Home</Link>
            <Link className='nav-item is-tab' to='/users'>Users</Link>
          </div>
        </div>
      </nav>
    )
  }
}
