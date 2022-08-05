import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Checklist from '../Checklist/Checklist';
import Contributors from '../Contributors/Contributors';
import Header from '../Header/Header';
import NavBar from '../NavigationBar/NavBar';
import Sightings from '../Sightings/Sightings';
import useDataStore from '../hooks/useDataStore';
import 
import './App.css';

function App() {


  useEffect(

  )

  return (
    <div className="App">
      <h1>Bird Adventures</h1>
      <NavBar />
      {/* <Switch> */}
        {/* <Route path='/sightings' render={() => { */}
          {/* <> */}
            <Header /> 
            <Sightings />
            <Contributors />
            <Checklist />
          {/* </> */}
        {/* }}/> */}
      {/* </Switch> */}
    </div>
  );
}

export default App;
