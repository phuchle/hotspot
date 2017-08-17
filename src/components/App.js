import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.css';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Nav} />

        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
};

export default App;
