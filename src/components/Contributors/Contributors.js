import React from 'react';
import ContributorCard from '../ContributorCard/ContributorCard';

const Contributors = ({contributors}) => {

  const contributorList = contributors.map(person => {
    return (
      <ContributorCard contributor={person} />
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