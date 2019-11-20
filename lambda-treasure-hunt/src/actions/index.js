import { createAsyncAction } from 'redux-promise-middleware-actions'

import { init } from '../api'

export const fetchInit = createAsyncAction("FETCH_INIT", init)

