let configureStore

if (process.env.ENV !== 'production') {
  configureStore = require('./configureStore.dev').default
} else {
  configureStore = require('./configureStore.prod').default
}

export default configureStore
