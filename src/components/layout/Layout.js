import React from 'react';

import classes from './Layout.module.css';
import MainNav from './MainNav';

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <MainNav />
      <main>
          {props.children}
      </main>
    </div>
  );
};

export default Layout;
