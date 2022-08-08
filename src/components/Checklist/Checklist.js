import React, { useState, useEffect } from 'react';
import ChecklistCard from '../ChecklistCard/ChecklistCard';
import './Checklist.css';
import PropTypes from 'prop-types';

const Checklist = ({bird, birds}) => {

  const [filtered, setFiltered ] = useState(birds)

  useEffect(() => {
    const filteredList = birds.filter(spotted => spotted.comName.toLowerCase().includes(bird.toLowerCase()))
    setFiltered(filteredList);
  }, [birds]); 

  const recentSightings = filtered.map((bird, index) => {
    return (
      <div key={index}>
        <ChecklistCard bird={bird}/>
      </div>
    )
  })
  
  console.log(recentSightings);

  return (
    <div className='sightings-wrapper'>      
      {recentSightings.length ? recentSightings : <h2>No sightings match.</h2>}  
    </div>
  )
}

Checklist.propTypes = {
  birds: PropTypes.array.isRequired
}

export default Checklist;