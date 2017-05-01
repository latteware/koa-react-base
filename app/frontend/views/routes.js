import React from 'react'
import { IndexRoute, Route } from 'react-router'
import App from './components/App'
import Public from './components/Public'

import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import About from './pages/About'
import Users from './pages/Users'
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword'
import RequestPassword from './pages/RequestPassword'
import SignUp from './pages/SignUp'

export default function routes (store) {
  const isAuthenticated = ({ location }, replace) => {
    const { session } = store.getState()

    if (!session.loggedIn && location.pathname.indexOf('app') >= 0) {
      replace({
        pathname: '/login'
      })
    }

    if (session.loggedIn && location.pathname.indexOf('app') === -1) {
      replace({
        pathname: '/app'
      })
    }
  }

  return (
    <Route>
      <Route path='/' component={Public} onEnter={isAuthenticated}>
        <IndexRoute component={Home} />
        <Route path='/about' component={About} />
        <Route path='/login' component={Login} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/request-password' component={RequestPassword} />

        <Route path='/emails/reset-password' component={ResetPassword} />
      </Route>

      <Route path='/app' component={App} onEnter={isAuthenticated}>
        <IndexRoute component={Dashboard} />
        <Route path='/users' component={Users} />
      </Route>
    </Route>
  )
}
