import React from 'react';
import ContributorCard from '../ContributorCard/ContributorCard';
import './Contributors.css';

const Contributors = ({contributors}) => {

  const contributorList = contributors.map((person, index) => {
    return (
      <div key={index}>
        <ContributorCard contributor={person} index={index + 1 }/>
      </div>
    )
  })

  return (
    <div className='contributors-wrapper'>
      {contributorList}
    </div>
  )
}

export default Contributors;