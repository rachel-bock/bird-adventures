import React from 'react';
import { NavLink } from 'react-router-dom';
import birdImage from '../../assets/jacques.jpg';
import './NavBar.css';

const NavBar = () => {

  return (
    <div className='navigation'>
      <div>
        <img src={birdImage} alt='bird by Jacques'/>
      </div>
      <div className='nav-options'>
        <NavLink to='/sightings'>
          Recent Sightings
        </NavLink>
        <NavLink to='/contributors'>
          Top 100 Contributors
        </NavLink>
        <NavLink to='/checklist'>
          My Checklist
        </NavLink>
        <NavLink to='/more'>
          More Information
        </NavLink>
      </div>
    </div>
  )
}

export default NavBar;