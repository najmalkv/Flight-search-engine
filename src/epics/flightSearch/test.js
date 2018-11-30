import * as actions from './actions'

import reducer, {initialState} from './reducer'

describe("search actions & reducers", () => {

	it("should create an action to set search type ", () => {
		const expectedAction = {
			type: actions.SET_SEARCH_TYPE,
			data: 'R'
		}
		expect(actions.setSearchType('R')).toEqual(expectedAction);

		const finalState = Object.assign({}, initialState, {srTyp: 'R'});
		expect(reducer({},expectedAction)).toEqual(finalState);
	});

	it("should create an action to set the origin", () => {
		const expectedAction = {
			type: actions.SET_ORIGIN,
			data: {city: 'Mumbai', code: 'BOM'}
		}
		expect(actions.setOrigin({city: 'Mumbai', code: 'BOM'})).toEqual(expectedAction);

		const finalState = Object.assign({}, initialState, {origin: {city: 'Mumbai', code: 'BOM'}});
		expect(reducer({},expectedAction)).toEqual(finalState);
	});

	it("should create an action to set the destination", () => {
		const expectedAction = {
			type: actions.SET_DESTINATION,
			data: {city: 'Delhi', code: 'DEL'}
		}
		expect(actions.setDestination({city: 'Delhi', code: 'DEL'})).toEqual(expectedAction);

		const finalState = Object.assign({}, initialState, {destination: {city: 'Delhi', code: 'DEL'}});
		expect(reducer({},expectedAction)).toEqual(finalState);
	});

	it("should create an action to set the departure date", () => {
		const expectedAction = {
			type: actions.SET_DEP_DATE,
			data: '2018-11-24'
		}
		expect(actions.setDepDate('2018-11-24')).toEqual(expectedAction);

		const finalState = Object.assign({}, initialState, {depDate: '2018-11-24'});
		expect(reducer({},expectedAction)).toEqual(finalState);
	});

	it("should create an action to set the return date", () => {
		const expectedAction = {
			type: actions.SET_RET_DATE,
			data: '2018-11-25'
		}
		expect(actions.setRetDate('2018-11-25')).toEqual(expectedAction);

		const finalState = Object.assign({}, initialState, {retDate: '2018-11-25'});
		expect(reducer({},expectedAction)).toEqual(finalState);
	});

	it("should create an action to set the pax count", () => {
		const expectedAction = {
			type: actions.SET_PAX_COUNT,
			data: '2'
		}
		expect(actions.setPaxCount('2')).toEqual(expectedAction);

		const finalState = Object.assign({}, initialState, {pax: '2'});
		expect(reducer({},expectedAction)).toEqual(finalState);
	});

	it("should create an action to update store with the search params", () => {
		const expectedAction = {
			type: actions.SET_ALL_SEARCH_PARAMS,
			data: {
					from: 'BOM',
					to: 'DEL',
					fromCity: 'Mumbai',
					toCity: 'Delhi',
					srTyp: 'O',
					depDate: '2018-11-24',
					retDate: '2018-11-25',
					pax: '3'
				}
		}
		expect(actions.setAllSearchParams({
					from: 'BOM',
					to: 'DEL',
					fromCity: 'Mumbai',
					toCity: 'Delhi',
					srTyp: 'O',
					depDate: '2018-11-24',
					retDate: '2018-11-25',
					pax: '3'
				})).toEqual(expectedAction);

		const finalState = Object.assign({}, initialState, {
					origin: {
						city: 'Mumbai',
						code: 'BOM'
					},
					destination: {
						city: 'Delhi',
						code: 'DEL'
					},
					srTyp: 'O',
					depDate: '2018-11-24',
					retDate: '2018-11-25',
					pax: '3'
				});
		expect(reducer({},expectedAction)).toEqual(finalState);
	});

});


