import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import birdImage from '../../assets/jacques.jpg';
import './NavBar.css';

const NavBar = () => {

  return (
    <div className='navigation'>
      <div className='nav-options'>
        <img src={birdImage} alt='bird by Jacques'/>
        <NavLink to='/'>
          Home
        </NavLink>
        <NavLink to='/sightings'>
          Recent Sightings
        </NavLink>
        <NavLink to='/contributors'>
          Top 100 Contributors
        </NavLink>
        {/* <NavLink to='/checklist'>
          My Checklist
        </NavLink>
        <NavLink to='/more'>
          More Information
        </NavLink> */}
      </div>
    </div>
  )
}

export default NavBar;