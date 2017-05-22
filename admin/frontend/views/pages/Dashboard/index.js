import React from 'react'
import classNames from 'classnames/bind'
import { connect } from 'react-redux'

import { dashboardActions } from 'core/dashboard'
import styles from './style.css'

const cx = classNames.bind(styles)

class Dashboard extends React.Component {
  constructor () {
    super()

    this.state = {}
  }

  async componentWillMount () {
    const { fetchMetrics } = this.props

    await fetchMetrics()
  }

  render () {
    const { loaded, metrics } = this.props

    if (!loaded) {
      return (<div>Loading</div>)
    }

    return (
      <div>
        <h1>Metrics</h1>
        <div>Users: {metrics.users}</div>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    loaded: state.dashboard.loadedMetrics,
    metrics: state.dashboard.metrics
  }
}

const mapDispatchToProps = {
  fetchMetrics: dashboardActions.fetchMetrics
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
