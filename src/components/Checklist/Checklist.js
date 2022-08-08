import React from 'react';
import ChecklistCard from '../ChecklistCard/ChecklistCard';
import './Checklist.css';
import PropTypes from 'prop-types';

const Checklist = ({birds}) => {

  const recentSightings = birds.map((bird, index) => {
    return (
      <div key={index}>
        <ChecklistCard bird={bird}/>
      </div>
    )
  })
     
  return (
    <div className='sightings-wrapper'>
      {recentSightings}  
    </div>
  )
}

Checklist.propTypes = {
  birds: PropTypes.array.isRequired
}

export default Checklist;