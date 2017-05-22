import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import { sessionReducer } from './session'
import { dashboardReducer } from './dashboard'
import { usersReducer } from './users'

export default combineReducers({
  routing,
  form,
  session: sessionReducer,
  dashboard: dashboardReducer,
  users: usersReducer
})
