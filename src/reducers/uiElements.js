import { TOGGLE_AUTH, TOGGLE_ADD_PLACE_MODAL } from '../actions/types'

export const uiElements = (state, action) => {
    switch (action.type) {
        case TOGGLE_AUTH:
            return {
                ...state,
                authModal: !state.authModal
            }
        case TOGGLE_ADD_PLACE_MODAL:
            return {
                ...state,
                addPlaceModal: !state.addPlaceModal
            }
        default:
            return state
    }

}