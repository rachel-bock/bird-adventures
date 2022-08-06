import React from 'react';
import './ContributorCard.css';

const ContributorCard = ({contributor, index}) => {
  
  return (
    <div className="contributor">
      <p>{index}.  {contributor.userDisplayName} spotted {contributor.numSpecies} species.</p>
    </div>
  )
}

export default ContributorCard;