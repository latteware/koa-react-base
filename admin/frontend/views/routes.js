import React from 'react'
import { IndexRoute, Route } from 'react-router'
import App from './components/App'
import Public from './components/Public'

import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import UserDetails from './pages/UserDetails'
import Login from './pages/Login'

export default function routes (store) {
  const isAuthenticated = ({ location }, replace) => {
    const { session } = store.getState()

    if (!session.loggedIn) {
      replace({
        pathname: '/login'
      })
    }
  }

  return (
    <Route>
      <Route path='/public' component={Public} onEnter={isAuthenticated}>
        <Route path='/login' component={Login} />
      </Route>

      <Route path='/' component={App} onEnter={isAuthenticated}>
        <IndexRoute component={Dashboard} />
        <Route path='/users' component={Users} />
        <Route path='/users/:uuid' component={UserDetails} />
      </Route>
    </Route>
  )
}
