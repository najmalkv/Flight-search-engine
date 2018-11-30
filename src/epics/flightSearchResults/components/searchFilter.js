import React, { Component } from 'react';
import { connect } from 'react-redux';


import Paper from '@material-ui/core/Paper';
import { Slider } from 'material-ui-slider';


import {minMax} from '../../../utils/helper';
import * as actions from '../actions'


class FlightSearchFilter extends Component {

	constructor(){
		super()

		this.state = {
			sliderValue: [0,100]
		}
	}

	handleChange = (minVal, maxVal) => (value) => {


		this.setState({sliderValue: value})

		const {setFilterValue} = this.props
		setFilterValue({lower: minVal, upper: maxVal})


	}

	handleSetFilterVal = (minVal, maxVal) => {

	}

	render(){
		const {searchResults} = this.props
		const {sliderValue} = this.state

		const minMaxFares = minMax(searchResults.results, 'fare')
		const minVal = parseInt(minMaxFares[0],10) + (sliderValue[0] * ((minMaxFares[1] - minMaxFares[0])/100))
		const maxVal = parseInt(minMaxFares[1],10) - ((100 - sliderValue[1]) * ((minMaxFares[1] - minMaxFares[0])/100))

		return(

				minVal && maxVal && minVal !== maxVal ? <Paper className="srch-filter">
					<h4 className="filter-title">Refine Flight Search</h4>
					<div className="slider-cont">
						<Slider
				          value={sliderValue}
				          range={true}
				          aria-labelledby="label"
				          onChange={this.handleChange(minVal, maxVal)}
				          fullWidth
				        />
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


