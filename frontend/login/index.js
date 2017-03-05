import 'babel-polyfill'
import React from 'react'
import { AppContainer } from 'react-hot-loader'
import ReactDOM from 'react-dom'
import Login from './Login'
import 'stylesheets/base.scss'

const rootElement = document.getElementById('app')
const render = (Root) => {
  ReactDOM.render(
    <AppContainer>
      <Root />
    </AppContainer>,
    rootElement
  )
}

if (module.hot) {
  module.hot.accept('./Login', () => {
    render(require('./Login').default)
  })
}

render(Login)
