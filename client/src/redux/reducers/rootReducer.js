import { combineReducers } from 'redux'

import modalReducer from './modalReducer'

const rootReducer = combineReducers({
	modalOpen: modalReducer,
})

export default rootReducer
