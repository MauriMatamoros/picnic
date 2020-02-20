import { combineReducers } from 'redux'

import auth from './auth'
import ingredients from './ingredients'

export default combineReducers({
	auth,
	ingredients
})
