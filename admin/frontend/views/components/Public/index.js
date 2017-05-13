import React, { Component } from 'react'

export default class Public extends Component {
  constructor (props) {
    super(props)
    this.state = {
      navbarOpen: false
    }
  }

  render () {
    return (
      <div className='main'>
        { this.props.children }
      </div>
    )
  }
}
