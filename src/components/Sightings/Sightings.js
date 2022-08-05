import React from 'react';
import SightingsCard from '../SightingCard/SightingCard';


const Sightings = (birds) => {

  const recentSightings = () => {
    birds.map( bird => {
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