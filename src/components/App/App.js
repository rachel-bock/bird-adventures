import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Checklist from '../Checklist/Checklist';
import Contributors from '../Contributors/Contributors';
import Header from '../Header/Header';
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
      checklist: []
    }
  }

  componentDidMount= () => {
    getSightings()
    .then(data => this.setState({sightings: data}));

  }
  
  render() {
    return(
      <div className="App">
        <h1>Bird Adventures</h1>
        <NavBar />
        {/* <Switch> */}
          {/* <Route path='/sightings' render={() => { */}
            {/* <> */}
              <Header /> 
              <Sightings birds={this.state.sightings} />
              <Contributors />
              <Checklist />
            {/* </> */}
          {/* }}/> */}
        {/* </Switch> */}
      </div>
    );
  }
}

export default App;
