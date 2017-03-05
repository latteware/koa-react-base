import React from 'react'
import { IndexRoute, Route } from 'react-router'
import App from 'components/App'
import Home from './Home/Home'
import Users from './Users/Users'

export default function routes () {
  return (
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/users' component={Users} />
    </Route>
  )
}
