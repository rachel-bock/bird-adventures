import React from 'react';
import SightingsCard from '../SightingCard/SightingCard';
import './Sightings.css';

const Sightings = ({birds}) => {

  const publicSightings = birds.filter(bird => !bird.locationPrivate)

  const recentSightings = publicSightings.map((bird, index) => {
      return (
        <div key={index}>
          <SightingsCard bird={bird}/>
        </div>
      )
  })
     
  return (
    <div className='sightings-wrapper'>
      {recentSightings}  
    </div>
  )
}

export default Sightings;