import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink
      to="/"
      exact
      style={{width: '100px'}}
      activeStyle={{background: 'green'}}
      >Home</NavLink>

      <NavLink
      to="/movies"
      exact
      style={{width: '100px'}}
      activeStyle={{background: 'green'}}
      >Movies</NavLink>

      <NavLink
      to="/directors"
      exact
      style={{width: '100px'}}
      activeStyle={{background: 'green'}}
      >Directors</NavLink>

      <NavLink
      to="/actors"
      exact
      style={{width: '100px'}}
      activeStyle={{background: 'green'}}
      >Actors</NavLink>
    </div>
  );
};

export default NavBar;
