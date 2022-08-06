import React from 'react';
import './SightingCard.css';

const SightingCard = ({bird}) => {

  
  return (
    <div className='sighting-card'>
      <h4>{bird.comName}</h4>
      <p>Spotted at {bird.locName} on {bird.obsDt}</p>
    </div>
  )
}

export default SightingCard;