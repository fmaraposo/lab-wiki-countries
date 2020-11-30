import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import myCountries from './countries.json';


class App extends React.Component {
  state = {
    countries: myCountries,
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/countrieslist">
            <CountriesList countries={this.state.countries} />
          </Route>
          {/*           <Route path="/countrieslist/:id">
            <CountryDetails countries={this.state.countries} />
          </Route> */}
          <Route
            path="/countrieslist/:id"
            render={(props) => <CountryDetails {...props} countries={this.state.countries} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
