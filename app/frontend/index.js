import 'babel-polyfill'
import React from 'react'
import { AppContainer } from 'react-hot-loader'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './core/store'
import './views/styles/styles.scss'
import Root from './views/root'

const rootElement = document.getElementById('app')
const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)
const render = (Root) => {
  ReactDOM.render(
    <AppContainer>
      <Root
        history={history}
        store={store}
      />
    </AppContainer>,
    rootElement
  )
}

if (module.hot) {
  module.hot.accept('./views/root', () => {
    render(require('./views/root').default)
  })
}

render(Root)
