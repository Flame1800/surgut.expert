import { TOGGLE_AUTH } from '../actions/types'

export const auth = (state, action) => {
    switch (action.type) {
        case TOGGLE_AUTH:
            return {
                ...state,
                open: !state.open
            }
        default:
            return state
    }
}