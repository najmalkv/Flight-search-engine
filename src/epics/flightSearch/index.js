import React, { Component } from 'react';
import { connect } from 'react-redux';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import AirportsAutoSuggest from './components/airportsAutoSuggest'
import {airportData} from '../../data/airportList'
import * as actions from './actions'
import './index.css'

class FlightSearch extends Component {

	constructor() {
		super()

		this.state = {
			errorMsg: ''
		}
	}


	handleSearchTypeChange = (event, value) => {
		const {setSearchType} = this.props

		setSearchType(value === 1 ? 'R' : 'O')
	}

	handleOriginChange = (data) => {
		const {setOrigin} = this.props

		setOrigin({city: data, code:airportData.find((item) => item.city === data).code})
	}

	handleDestinationChange = (data) => {
		const {setDestination} = this.props

		setDestination({city: data, code:airportData.find((item) => item.city === data).code})
	}

	handleDateChange = type => (event, value) => {
		const {setDepDate, setRetDate} = this.props

		type === 'ret'? setRetDate(event.target.value) : setDepDate(event.target.value)

	}

	handlePaxChange = (event, value) => {
		const {setPaxCount} = this.props

		setPaxCount(event.target.value)

	}

	handleSearch = () => {

		const {history,search} = this.props


		//validations
		let errorMsg = ''

		if(!search.origin.code) errorMsg = 'Please select an origin city'
		else if(!search.destination.code) errorMsg = 'Please select a destination city'
		else if(!search.depDate) errorMsg = 'Please select a departure date'
		else if(search.depDate && search.srTyp === 'R' && !search.retDate) errorMsg = 'Please select a return date'
		else if(search.srTyp === 'R' && new Date(search.retDate) <  new Date(search.depDate)) errorMsg = 'Return date cannot be greater than departure date'

		if(errorMsg) return this.setState({errorMsg})
		else
			history.push(`/search/${search.origin.code}/${search.destination.code}/${search.origin.city}/${search.destination.city}/${search.srTyp}/${search.depDate}${search.srTyp === 'R' ? '/' + search.retDate : ''}/${search.pax}`)
	}

	render(){
		const {search, history} = this.props
		const {errorMsg} = this.state

		return(
			<div>
				<Paper className={"srch-form " + (history.location.pathname.includes('search')? 'modify-search' : '') }>
					<Tabs value={search.srTyp === 'R' ? 1 : 0} onChange={this.handleSearchTypeChange} fullWidth>
						<Tab label="One Way" />
						<Tab label="Round Trip" />
					</Tabs>
					<div className="srch-form-field-cont">
						<AirportsAutoSuggest label="Origin City" placeholder="Enter Origin City" value={search.origin.city} handleChange={(data) => this.handleOriginChange(data)}/>
					</div>
					<div className="srch-form-field-cont">
						<AirportsAutoSuggest label="Destination City" placeholder="Enter Destination City" value={search.destination.city} handleChange={(data) => this.handleDestinationChange(data)}/>
					</div>
					<div className="srch-form-field-cont">
					 	<div className="srch-field-half">
							<TextField
						        id="date"
						        label="Departure"
						        type="date"
						        value={search.depDate}
						        className="srch-txt-fld"
						        onChange={this.handleDateChange('dep')}
						        InputLabelProps={{
						          shrink: true,
						        }}
						      />
						</div>
						<div className="srch-field-half">
							{search.srTyp === 'R' && <TextField
						        id="date"
						        label="Return"
						        type="date"
						        value={search.retDate}
						        onChange={this.handleDateChange('ret')}
						        className="srch-txt-fld"
						        InputLabelProps={{
						          shrink: true,
						        }}
						      />}
						</div>
					</div>

					<div className="srch-form-field-cont">
						<FormControl>
							<InputLabel shrink htmlFor="paxcnt">
					            Passengers
					          </InputLabel>
							<Select
					            value={search.pax}
					            onChange={this.handlePaxChange}
					            inputProps={{
					              name: 'passengers',
					              id: 'paxcnt',
					            }}
					          >

					            <MenuItem value={1}>1</MenuItem>
					            <MenuItem value={2}>2</MenuItem>
					            <MenuItem value={3}>3</MenuItem>
					            <MenuItem value={4}>4</MenuItem>
					            <MenuItem value={5}>5</MenuItem>
					            <MenuItem value={6}>6</MenuItem>
					            <MenuItem value={7}>7</MenuItem>
					            <MenuItem value={8}>8</MenuItem>
					            <MenuItem value={9}>9</MenuItem>
					          </Select>
				        </FormControl>
					</div>
					<div className="srch-error-msg">
						{errorMsg}
					</div>
					<div className="srch-form-field-cont">
						<Button variant="contained" color="primary" onClick={this.handleSearch}>
					        Search
					    </Button>
					</div>

				</Paper>
			</div>
			)
	}
}


function mapStateToProps ({flightSearch, common}) {

  return {

    search: flightSearch,
    common: common

  }

}

function mapDispatchToProps (dispatch) {

  return {

     setSearchType: (data) => dispatch(actions.setSearchType(data)),
     setOrigin: (data) => dispatch(actions.setOrigin(data)),
     setDestination: (data) => dispatch(actions.setDestination(data)),
     setDepDate: (data) => dispatch(actions.setDepDate(data)),
     setRetDate: (data) => dispatch(actions.setRetDate(data)),
     setPaxCount: (data) => dispatch(actions.setPaxCount(data)),

  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightSearch);


