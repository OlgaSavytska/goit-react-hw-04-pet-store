import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

const activeStyle = { color: 'pink' };

const Nav = () => {
  return (
    <ul className={s.nav}>
      <li>
        <NavLink className={s.k} exact activeStyle={activeStyle} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={s.k} activeStyle={activeStyle} to="/about">
          About page
        </NavLink>
      </li>
      <li>
        <NavLink className={s.k} activeStyle={activeStyle} to="/pets">
          Pets
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
