import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Public extends Component {
  constructor (props) {
    super(props)
    this.state = {
      navbarOpen: false
    }
  }

  toggleNavbar (e) {
    if (this.state.navbarOpen) {
      this.setState({navbarOpen: false})
    } else {
      this.setState({navbarOpen: true})
    }
  }

  render () {
    var navbarClasses, navbarMenuClasses
    if (this.state.navbarOpen) {
      navbarClasses = 'nav-toggle is-active'
      navbarMenuClasses = 'nav-right nav-menu is-active'
    } else {
      navbarClasses = 'nav-toggle'
      navbarMenuClasses = 'nav-right nav-menu'
    }

    return (
      <div className='main'>
        <nav className='nav'>
          <div className='nav-left'>
            <Link className='nav-item' to='/'>
              <img src='http://bulma.io/images/bulma-logo.png' alt='Bulma logo' />
            </Link>
          </div>

          <div className='nav-center'>
            <a className='nav-item'>
              <span className='icon'>
                <i className='fa fa-github' />
              </span>
            </a>
            <a className='nav-item'>
              <span className='icon'>
                <i className='fa fa-twitter' />
              </span>
            </a>
          </div>

          <span className={navbarClasses} onClick={e => this.toggleNavbar(e)}>
            <span />
            <span />
            <span />
          </span>

          <div className={navbarMenuClasses}>
            <Link className='nav-item' to='/about'>About</Link>
            <span className='nav-item'>
              <Link className='button' to='/login'>
                <span>Login</span>
              </Link>
              <Link className='button is-primary' to='/sign-up'>
                <span>Sign up</span>
              </Link>
            </span>
          </div>
        </nav>

        { this.props.children }
      </div>
    )
  }
}
