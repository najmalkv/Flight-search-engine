import { combineReducers } from 'redux'

import {flightSearch} from '../epics/flightSearch/reducer'
import {flightSearchResults} from '../epics/flightSearchResults/reducer'

let intialState = {

}


function common(state = intialState, action) {

	return state

}

export default combineReducers({
	common,
	flightSearch,
	flightSearchResults
})