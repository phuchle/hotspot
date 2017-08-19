import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import Home from './Home';
import MapContainer from './MapContainer';
import 'bootstrap/dist/css/bootstrap.css';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Nav} />

        <Switch>
          <Route exact path="/" render={({ history, location }) => (
            <Home
              history={history}
              location={location}
            />
          )} />
          <Route path="/map" render={({ location }) => (
            <MapContainer
              location={location}
            />
          )} />
        </Switch>
      </div>
    );
  }
};

export default App;
