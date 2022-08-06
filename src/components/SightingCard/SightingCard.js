import React from 'react';

const SightingCard = ({bird}) => {

  
  return (
    <>
      <h4>{bird.comName}</h4>
      <p>spotted at {bird.locName} on {bird.obsDt}</p>
    </>
  )
}

export default SightingCard;