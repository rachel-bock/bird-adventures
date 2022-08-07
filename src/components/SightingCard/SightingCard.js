import React from 'react';
import './SightingCard.css';
import PropTypes from 'prop-types';

const SightingCard = ({bird}) => {

  
  return (
    <div className='sighting-card'>
      <h4>{bird.comName}</h4>
      <p>Spotted at {bird.locName} on {bird.obsDt}</p>
    </div>
  )
}

SightingCard.propTypes = {
  bird: PropTypes.object.isRequired
}

export default SightingCard;