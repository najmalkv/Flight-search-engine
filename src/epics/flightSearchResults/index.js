import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import * as actions from './actions'
import * as searchActions from '../flightSearch/actions'
import './index.css'
import allFlightsData from '../../data/allFlights.json'
import {ordinal_suffix_of, convertStringToDate, getMonthName, formatAMPM, minMax} from '../../utils/helper'

class FlightSearchResults extends Component {

	constructor(props){
		super(props);

		const {params, setAllSearchParams, setResults, clearResults, setFilterValue} = this.props
		const {from, to, fromCity, toCity, srTyp, depDate, retDate, pax} = params

		// reset results
		clearResults()

		// intialize search based on url parameters
		this.state = {
			from: from,
			to: to,
			fromCity: fromCity,
			toCity: toCity,
			srTyp: srTyp,
			depDate: depDate,
			retDate: retDate,
			depDateAsDate: convertStringToDate(depDate),
			retDateAsDate: retDate ? convertStringToDate(retDate) : '',
			pax: pax
		}

		// update store with the url parameters
		setAllSearchParams({
			from: from,
			to: to,
			fromCity: fromCity,
			toCity: toCity,
			srTyp: srTyp,
			depDate: depDate,
			retDate: retDate? retDate : '',
			pax: pax
		})

		//filter results based on search parameters
		const filteredFlights =  srTyp === 'R' ? allFlightsData.filter((flight)=>
				flight.from === from && flight.to === to && flight.depDate === depDate && flight.retDate === retDate
				).sort((a,b) => a.fare - b.fare)
			: allFlightsData.filter((flight)=>
				flight.from === from && flight.to === to && flight.depDate === depDate && flight.srTyp === srTyp
				).sort((a,b) => a.fare - b.fare)


		// update store with the results
		setResults(filteredFlights)

		//intialize filter values based on results
		const minMaxFares = minMax(filteredFlights, 'fare')
		setFilterValue({lower: minMaxFares[0], upper: minMaxFares[1]})

	}


	render(){
		const {searchResults} = this.props
		const {fromCity, toCity, srTyp, depDateAsDate, retDateAsDate, pax} = this.state

		return(
				<div className="srch-results-cont">
					<Paper className="srch-criteria">
						{fromCity} > {toCity} {srTyp === 'R' && ' > ' + fromCity}
						<div className="date-info-cont">
							<span className="date-info">Depart: {ordinal_suffix_of(depDateAsDate.getDate())} {getMonthName(depDateAsDate.getMonth(), true)} {depDateAsDate.getFullYear()}</span>
							{srTyp === 'R' && <span className="date-info">Return: {ordinal_suffix_of(retDateAsDate.getDate())} {getMonthName(retDateAsDate.getMonth(), true)} {retDateAsDate.getFullYear()}</span>}
						</div>
					</Paper>

					{searchResults.results.length > 0 ? searchResults.results.filter((flight) => flight.fare >= searchResults.filterValue.lower && flight.fare <= searchResults.filterValue.upper).map((flight, index) => <Paper key={index} className="flt-result">
						<div className="flt-info-section">
							<strong className="flt-fare">&#8377;{flight.fare * pax}</strong>
							<div className="flt-info">
								<small className="flt-info-txt flt-no">{flight.fltNo}</small>

								<span className="flt-info-txt">{flight.from} > {flight.to}</span>

								<span className="flt-info-txt">Depart: {formatAMPM(flight.depTime)}</span>

								<span className="flt-info-txt">Arrive: {formatAMPM(flight.arrTime)}</span>
							</div>
							{flight.srTyp === 'R' && <div className="flt-info">
								<small className="flt-info-txt flt-no">{flight.retFltNo}</small>

								<span className="flt-info-txt">{flight.to} > {flight.from}</span>

								<span className="flt-info-txt">Depart: {formatAMPM(flight.retDepTime)}</span>

								<span className="flt-info-txt">Arrive: {formatAMPM(flight.retArrTime)}</span>
							</div>}
						</div>
						<div className="flt-action-section">
							<Button variant="contained" color="primary" className="flt-sel-btn">
						        Book This Flight
						    </Button>
						</div>
					</Paper>)
					: <Paper className="srch-criteria srch-error">
						Sorry! No Flights were found that match your search criteria.
					</Paper>
				}

				</div>
			)
	}
}


function mapStateToProps ({flightSearchResults, flightSearch, common}) {

  return {
  	searchResults: flightSearchResults,
    search: flightSearch,
    common: common

  }

}

function mapDispatchToProps (dispatch) {

  return {

     setAllSearchParams: (data) => dispatch(searchActions.setAllSearchParams(data)),
     setResults: (data) => dispatch(actions.setResults(data)),
     clearResults: (data) => dispatch(actions.clearResults(data)),
     setFilterValue: (data) => dispatch(actions.setFilterValue(data)),

  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightSearchResults);


