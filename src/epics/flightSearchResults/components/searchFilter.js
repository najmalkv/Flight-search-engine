import React, { Component } from 'react';
import { connect } from 'react-redux';


import Paper from '@material-ui/core/Paper';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import {minMax} from '../../../utils/helper';
import * as actions from '../actions'

const Range = Slider.Range

class FlightSearchFilter extends Component {

	constructor(){
		super()

		this.state = {
			sliderValue: [0,100]
		}
	}

	handleChange = (value) => {


		this.setState({sliderValue: value})

		const minMaxFares = this.getMinMaxValues(value)

		const {setFilterValue} = this.props
		setFilterValue({lower: minMaxFares[0], upper: minMaxFares[1]})

	}

	getMinMaxValues = (sliderValue) => {
		const {searchResults} = this.props


		const minMaxFares = minMax(searchResults.results, 'fare')
		const minVal = parseInt(minMaxFares[0],10) + (sliderValue[0] * ((minMaxFares[1] - minMaxFares[0])/100))
		const maxVal = parseInt(minMaxFares[1],10) - ((100 - sliderValue[1]) * ((minMaxFares[1] - minMaxFares[0])/100))

		return [minVal, maxVal]
	}

	render(){

		const {sliderValue} = this.state

		const minMaxFares = this.getMinMaxValues(sliderValue)
		const minVal = minMaxFares[0]
		const maxVal = minMaxFares[1]

		return(

				minVal && maxVal && minVal !== maxVal ? <Paper className="srch-filter">
					<h4 className="filter-title">Refine Flight Search</h4>
					<div className="slider-cont">
				       <Range allowCross={false}   value={sliderValue} onChange={this.handleChange} />
					</div>
					<div className="filter-range">
						&#8377;{minVal} - &#8377;{maxVal}
					</div>
				</Paper> : <div></div>

			)
	}
}


function mapStateToProps ({flightSearchResults, common}) {

  return {

    searchResults: flightSearchResults,
    common: common

  }

}

function mapDispatchToProps (dispatch) {

  return {

     setFilterValue: (data) => dispatch(actions.setFilterValue(data)),

  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightSearchFilter);


