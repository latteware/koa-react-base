import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { getSession } from 'core/session'
import AppHeader from 'components/AppHeader'

function App ({ children }) {
  return (
    <div>
      <AppHeader />
      <div className='container'>
        {children}
      </div>
    </div>
  )
}

const mapStateToProps = createSelector(
  getSession,
  session => ({
    loggedIn: session.loggedIn
  })
)

export default connect(
  mapStateToProps
)(App)
