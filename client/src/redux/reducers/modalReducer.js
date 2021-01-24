import { OPEN_MODAL } from './../actions/actionTypes'

const INITIAL_STATE = {
	isOpen: false,
}

const modalReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case OPEN_MODAL:
			return { ...state, isOpen: action.payload }
		default:
			return state
	}
}

export default modalReducer