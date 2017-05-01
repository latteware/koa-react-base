import { sessionSagas } from './session'

export default function * sagas () {
  yield [
    ...sessionSagas
  ]
}
