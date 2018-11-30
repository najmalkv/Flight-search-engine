import React, { Component } from 'react';
import { connect } from 'react-redux';

import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import { withStyles } from '@material-ui/core/styles';
import {airportData} from '../../../data/airportList'

const suggestions = airportData

function renderInputComponent(inputProps) {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          input: classes.input,
        },
      }}
      {...other}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.city, query);
  const parts = parse(suggestion.city, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
}


function getSuggestions(value) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 && suggestion.city.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

function getSuggestionValue(suggestion) {
  return suggestion.city;
}



const styles = theme => ({
  root: {
    // height: 250,
    flexGrow: 1,
  },
  container: {
    position: 'relative',
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  divider: {
    height: theme.spacing.unit * 2,
  },
});




class AirportsAutoSuggest extends Component {

	constructor() {
		super()

		 this.state = {
		    value: '',
    		suggestions: [],
	    };
	}

	componentWillMount(){
		const {value} = this.props

		this.setState({value})
	}

	componentWillReceiveProps(newProps){
		const {value} = newProps


		this.setState({value})
	}

	handleChange = name => (event, { newValue }) => {
	    this.setState({
	      value: newValue,
	    });
	  };


	  handleSuggestionsFetchRequested = ({ value }) => {
	    this.setState({
	      suggestions: getSuggestions(value),
	    });
	  };

	  handleSuggestionsClearRequested = () => {
	    this.setState({
	      suggestions: [],
	    });
	  };

	render(){


		const { classes, label, placeholder, handleChange} = this.props
		const {value} = this.state

	    // Autosuggest will pass through all these props to the input.
	    const autosuggestProps = {
	      renderInputComponent,
	      suggestions: this.state.suggestions,
	      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
	      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
	      getSuggestionValue,
	      renderSuggestion,
	    };



		return(
				<div className={classes.root}>
					<Autosuggest
			          {...autosuggestProps}
			          inputProps={{
			            classes,
			            label: label? label: '',
			            placeholder: placeholder? placeholder : '',
			            value: value,
			            onChange: this.handleChange(),
			          }}
			          theme={{
			            container: classes.container,
			            suggestionsContainerOpen: classes.suggestionsContainerOpen,
			            suggestionsList: classes.suggestionsList,
			            suggestion: classes.suggestion,
			          }}
			          renderSuggestionsContainer={options => (
			            <Paper {...options.containerProps} square>
			              {options.children}
			            </Paper>
			          )}
			          onSuggestionSelected={
			          	(event, {suggestionValue}) => handleChange(suggestionValue)
			          }
			        />
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



  }

}

AirportsAutoSuggest.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AirportsAutoSuggest));


