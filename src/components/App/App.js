import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Checklist from '../Checklist/Checklist';
import Contributors from '../Contributors/Contributors';
import NavBar from '../NavigationBar/NavBar';
import Sightings from '../Sightings/Sightings';
import { getSightings, getContributors } from '../../apiCalls';
import './App.css';


class App extends Component {

  constructor () {
    super();
    this.state = {
      sightings: [], 
      contributors: [], 
      checklist: [],
    }
  }

  componentDidMount= () => {
    getSightings()
    .then(data => this.setState({sightings: data}));
    getContributors() 
    .then(data => this.setState({contributors: data}));
  }

  render() {
    return(
      <div className="App">
        <h1>Bird Adventures</h1>
        <NavBar />
        <Switch>
          <Route exact path='/sightings'>
            <Sightings birds={this.state.sightings} />
          </Route>
          <Route exact path='/contributors'>
            <Contributors contributors={this.state.contributors}/>
          </Route>
          <Route exact path='/checklist'>
            <Checklist />
          </Route>
          <Route exact path='/'>
            <h2>Welcome to Bird Adventures</h2>
            <p>Here you can find bird sightings in Colorado for the most recent 14 day period.</p>
          </Route>
          <Route path='*'>
              <h3>Error 404: Sorry, that page that doesn't exist.</h3>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
