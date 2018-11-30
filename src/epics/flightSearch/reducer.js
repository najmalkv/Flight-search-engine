import * as actions from './actions'



export const intialState = {
	srTyp: 'O',
	origin: {
		city: '',
		code: ''
	},
	destination: {
		city: '',
		code: ''
	},
	depDate: '2018-11-24',
	retDate: '2018-11-25',
	pax: 1
}


export const flightSearch = (state = intialState, action) => {
	const {data} = action

	switch (action.type) {
		case actions.SET_SEARCH_TYPE:
		  return {
	        ...state,
	        srTyp: data
	      }
		case actions.SET_ORIGIN:
		  return {
	        ...state,
	        origin: data
	      }
		case actions.SET_DESTINATION:
		  return {
	        ...state,
	        destination: data
	      }
		case actions.SET_DEP_DATE:
		  return {
	        ...state,
	        depDate: data
	      }
		case actions.SET_RET_DATE:
		  return {
	        ...state,
	        retDate: data
	      }
		case actions.SET_PAX_COUNT:
		  return {
	        ...state,
	        pax: data
	      }
	    case actions.SET_ALL_SEARCH_PARAMS:
		  return {
	        ...state,
	        srTyp: data.srTyp,
			origin: {
				city: data.fromCity,
				code: data.from
			},
			destination: {
				city: data.toCity,
				code: data.to
			},
			depDate: data.depDate,
			retDate: data.retDate,
			pax: data.pax
	      }
	    default:
		return state
	}
}

export default flightSearch