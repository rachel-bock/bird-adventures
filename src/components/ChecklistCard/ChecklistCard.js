import React from 'react';
import './ChecklistCard.css';
import PropTypes from 'prop-types';

const ChecklistCard = ({bird}) => {
 
  return (
    <div className='checklist-card'>
      <h4>{bird.comName}</h4>
      <p>Spotted at {bird.locName} on {bird.obsDt}</p>
    </div>
  )
}

ChecklistCard.propTypes = {
  bird: PropTypes.object.isRequired
}

export default ChecklistCard;