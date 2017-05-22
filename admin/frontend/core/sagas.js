import { sessionSagas } from './session'
import { dashboardSagas } from './dashboard'
import { usersSagas } from './users'

export default function * sagas () {
  yield [
    ...sessionSagas,
    ...dashboardSagas,
    ...usersSagas
  ]
}
