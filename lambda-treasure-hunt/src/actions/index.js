import { createAsyncAction } from 'redux-promise-middleware-actions'

import { init, move } from '../api'

export const fetchInit = createAsyncAction("FETCH_INIT", init)

export const fetchMove = createAsyncAction("FETCH_MOVE", move)

