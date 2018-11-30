import * as actions from './actions'

import reducer, {initialState} from './reducer'

describe("search actions & reducers", () => {

	const flightData = [{
				"from":"COK",
				"to":"DEL",
				"depDate": "2018-11-24",
				"depTime": "16:00",
				"arrTime": "18:00",
				"retDate": "2018-11-25",
				"retDepTime": "10:00",
				"retArrTime": "13:00",
				"fltNo": "9W-202",
				"retFltNo": "9W-102",
				"fare": "1900",
				"srTyp": "R"
			}]

	it("should create an action to set flight results ", () => {
		const expectedAction = {
			type: actions.SET_RESULTS,
			data: flightData
		}
		expect(actions.setResults(flightData)).toEqual(expectedAction);

		const finalState = Object.assign({}, initialState, {results: flightData });
		expect(reducer({},expectedAction)).toEqual(finalState);
	});

	it("should create an action to clear results", () => {
		const expectedAction = {
			type: actions.CLEAR_RESULTS,
			data: []
		}
		expect(actions.clearResults([])).toEqual(expectedAction);

		const finalState = Object.assign({}, initialState, {results: []});
		expect(reducer({results: flightData},expectedAction)).toEqual(finalState);
	});

	it("should create an action to set filter value", () => {
		const expectedAction = {
			type: actions.SET_FILTER_VAL,
			data: '1000'
		}
		expect(actions.setFilterValue('1000')).toEqual(expectedAction);

		const finalState = Object.assign({}, initialState, {filterValue: '1000'});
		expect(reducer({},expectedAction)).toEqual(finalState);
	});



});


