import React from 'react';
import SightingsCard from '../SightingCard/SightingCard';
// import { useParams, useRouteMatch} from 'react-router-dom';


const Sightings = ({birds}) => {
  // const { birds } = useParams();

  const recentSightings = birds.map((bird, index) => {
    if(!bird.locationPrivate) {
      return (
        <div key={index}>
          <SightingsCard bird={bird}/>
        </div>
      )
    } else {
      return (
        <></>
      )
    }
  })
   
  return (
    <div className='sightings-wrapper'>
      <p>Sightings component</p>
      {recentSightings}  
    </div>
  )
}

export default Sightings;