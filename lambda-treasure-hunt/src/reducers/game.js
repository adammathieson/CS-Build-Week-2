import { fetchInit, fetchMove } from '../actions'

const initialState = {
    inProgress: false,
    serverError: {},
    isServerError: false,
    currentRoom: {}
}

export const gameReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        // Initialize game cases
        case fetchInit.pending.toString():
            return {
                ...state,
                inProgress: true,
            }
        case fetchInit.fulfilled.toString():
            return {
                ...state,
                inProgress: false,
                currentRoom: payload,
                isServerError: false,
                serverError: {},
            }
        case fetchInit.rejected.toString():
            return {
                ...state,
                inProgress: false,
                isServerError: true,
                serverError: payload
            }
        // Moving to a room case
        case fetchMove.pending.toString():
            return {
                ...state,
                inProgress: true,
            }
        case fetchMove.fulfilled.toString():
            return {
                ...state,
                inProgress: false,
                currentRoom: payload,
                isServerError: false,
                serverError: {},
            }
        case fetchMove.rejected.toString():
            return {
                ...state,
                inProgress: false,
                isServerError: true,
                serverError: payload
            }
        
        default:
            return state
    }
}