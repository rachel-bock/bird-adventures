import React from 'react';

const SightingCard = ({bird}) => {

  
  return (
    <div className='sighting-card'>
      <h4>{bird.comName}</h4>
      <p>spotted at {bird.locName} on {bird.obsDt}</p>
    </div>
  )
}

export default SightingCard;