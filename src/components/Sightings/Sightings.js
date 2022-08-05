import React from 'react';
import SightingsCard from '../SightingCard/SightingCard';
import useDataStore from '../hooks/useDataStore';

const Sightings = () => {

  const sightings = useDataStore(state => state.sightings);
  
  const recentSightings = () => {
    sightings.map( bird => {
      return (
        <SightingsCard bird={bird}/>
      )
    })
  }
  
  return (
    <div className='sightings-wrapper'>
      <p>Sightings component</p>
      {recentSightings}  
    </div>
  )
}

export default Sightings;