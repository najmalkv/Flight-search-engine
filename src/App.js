import React, { Component } from 'react';
import './App.css';

import FlightSearch from './epics/flightSearch';
import FlightSearchResults from './epics/flightSearchResults';
import FlightSearchFilter from './epics/flightSearchResults/components/searchFilter';
import Divider from '@material-ui/core/Divider';
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 onClick={() => window.location.href = '/'}>Flight Search Engine</h1>
           <Divider light/>
        </header>

        <main className="main">
          <section className="search-form">
             <Route
                path="/"
                render={({ history }) => (
                  <FlightSearch key={history.location.pathname} history={history}/>
                )}
              />
              <Route
                path="/search"
                render={({ history }) => (
                  <FlightSearchFilter history={history}/>
                )}
              />
          </section>
           <section className="search-results">
             <Route
                path="/search/:from/:to/:fromCity/:toCity/:srTyp/:depDate/:retDate?/:pax"
                render={({ history, match}) => (
                  <FlightSearchResults key={
                    Object.values(match.params).join('-')
                  } history={history} params={match.params}/>
                )}
              />
          </section>

        </main>
      </div>
    );
  }
}

export default App;
