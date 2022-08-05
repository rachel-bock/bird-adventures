import React from 'react';
import ContributorCard from '../ContributorCard/ContributorCard';

const Contributors = ({contributors}) => {

  const contributorList = contributors.map((person, index) => {
    return (
      <div key={index}>
        <ContributorCard contributor={person} index={index + 1 }/>
      </div>
    )
  })

  return (
    <>
      <p>Contributors component</p>
      {contributorList}
    </>
  )
}

export default Contributors;