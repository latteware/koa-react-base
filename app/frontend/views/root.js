import React from 'react'
import { Provider, connect } from 'react-redux'
import { Router } from 'react-router'
import routes from './routes'

import { sessionActions } from 'core/session'

class Root extends React.Component {
  componentDidMount () {
    const { getCurrentUser } = this.props

    getCurrentUser()
  }

  render () {
    const { history, store, loaded, loadError } = this.props

    if (loadError) {
      return (<div>
        { loadError.status }:{ loadError.message }
      </div>)
    }

    if (!loaded) {
      return (<div>
        Loading...
      </div>)
    }

    return (
      <Provider store={store}>
        <Router history={history}>
          {routes(store)}
        </Router>
      </Provider>
    )
  }
}

Root.propTypes = {
  history: React.PropTypes.object.isRequired,
  store: React.PropTypes.object.isRequired
}

const mapStateToProps = function (state) {
  return {
    loaded: state.session.loaded,
    loadError: state.session.loadError,
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = {
  getCurrentUser: sessionActions.getCurrentUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)
