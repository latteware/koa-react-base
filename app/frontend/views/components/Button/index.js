import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

export default class Button extends React.Component {
  render () {
    const { props } = this

    const className = cx('button', {
      'is-primary': props.primary,
      'is-loading': props.loading
    })

    return (
      <a className={className} onClick={props.onClick}>{props.children}</a>
    )
  }
}

Button.propTypes = {
  primary: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func
}

Button.defaultPropTypes = {
  primary: false,
  loading: false,
  onClick: () => {}
}
