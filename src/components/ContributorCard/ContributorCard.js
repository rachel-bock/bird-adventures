import React from 'react';

const ContributorCard = ({contributor, index}) => {

  
  return (
    <>
      <p>{index}.  {contributor.userDisplayName} spotted {contributor.numSpecies} species.</p>
    </>
  )
}



export default ContributorCard;