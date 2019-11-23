import { createAsyncAction } from 'redux-promise-middleware-actions'

import { init, move, status } from '../api'

export const fetchInit = createAsyncAction("FETCH_INIT", init)

export const fetchMove = createAsyncAction("FETCH_MOVE", move)

export const fetchStatus = createAsyncAction("FETCH_STATUS", status)

