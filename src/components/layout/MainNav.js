import React from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNav.module.css';

const MainNav = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups | </Link>
            <Link to="/favorites">Favorites | </Link>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
