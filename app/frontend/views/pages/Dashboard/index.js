import React from 'react'
import classNames from 'classnames/bind'
import { isEmpty } from 'lodash'

import styles from './style.css'

const cx = classNames.bind(styles)

export default class Dashboard extends React.Component {
  constructor () {
    super()

    this.state = {
      flash: window.flash
    }
  }

  clearFlash () {
    this.setState({flash: null})
  }

  render () {
    var flashEl
    if (!isEmpty(this.state.flash)) {
      const flash = this.state.flash
      flashEl = (<article className={cx('message', flash.className)}>
        <div className='message-header'>
          <p>{flash.header}</p>
          <button className='delete' onClick={() => this.clearFlash()} />
        </div>
        <div className='message-body'>
          {flash.body}
        </div>
      </article>)
    }

    var body
    if (window.user && !window.user.validEmail) {
      body = (<article className='message is-warning'>
        <div className='message-header'>
          <p>Validate your email</p>
          <button className='delete' />
        </div>
        <div className='message-body'>
          Please validate your email before using the app
        </div>
      </article>)
    } else {
      body = (<div>
        Dashboard
      </div>)
    }

    return (
      <div>
        { flashEl }
        { body }
      </div>
    )
  }
}
