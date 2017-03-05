import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import routes from './routes'

function Root ({ history, store }) {
  return (
    <Provider store={store}>
      <Router history={history}>
        {routes(store)}
      </Router>
    </Provider>
  )
}

Root.propTypes = {
  history: React.PropTypes.object.isRequired,
  store: React.PropTypes.object.isRequired
}

export default Root
