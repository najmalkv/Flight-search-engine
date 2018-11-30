import * as actions from './actions'



export const intialState = {
	results: [],
	filterValue: {
		lower: 0,
		upper: 100
	}
}


export const flightSearchResults = (state = intialState, action) => {
	const {data} = action

	switch (action.type) {
		case actions.SET_RESULTS:
		  return {
	        ...state,
	        results: data
	      }
		case actions.CLEAR_RESULTS:
		  return {
	        ...state,
	        results: []
	      }

		case actions.SET_FILTER_VAL:
		  return {
	        ...state,
	        filterValue: data
	      }

	    default:
		return state
	}
}

export default flightSearchResults