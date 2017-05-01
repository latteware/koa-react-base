import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import { sessionReducer } from './session'

export default combineReducers({
  routing,
  form,
  session: sessionReducer
})
