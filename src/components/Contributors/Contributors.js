import React from 'react';
import ContributorCard from '../ContributorCard/ContributorCard';
import './Contributors.css';
import PropTypes from 'prop-types';

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

Contributors.propTypes = {
  contributors: PropTypes.array.isRequired
}

export default Contributors;