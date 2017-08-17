import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.css';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Nav} />
        </Switch>
      </div>
    );
  }
};

export default App;
