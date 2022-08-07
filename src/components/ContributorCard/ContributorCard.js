import React from 'react';
import './ContributorCard.css';
import PropTypes from 'prop-types';

const ContributorCard = ({contributor, index}) => {
  
  return (
    <div className="contributor">
      <p>{index}.  {contributor.userDisplayName} spotted {contributor.numSpecies} species.</p>
    </div>
  )
}

ContributorCard.propTypes = {
  contributor: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}

export default ContributorCard;