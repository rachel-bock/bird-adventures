import React from 'react';
import SightingsCard from '../SightingCard/SightingCard';
import './Sightings.css';
import PropTypes from 'prop-types';

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

Sightings.propTypes = {
  birds: PropTypes.array.isRequired
}

export default Sightings;