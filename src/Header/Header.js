import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      <h1 className={classes.headerTitle}>Todos</h1>
    </div>
  )
}

export default Header
