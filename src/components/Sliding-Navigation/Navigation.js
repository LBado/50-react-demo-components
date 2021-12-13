import React from 'react';

import styles from './Navigation.module.css';

const Navigation = (props) => {
  
  return (
    <div className={styles.navigation}>
      <span onClick={props.onSetTab.bind(null, 0)}>Home</span>
      <span onClick={props.onSetTab.bind(null, 1)}>About</span>
      <span onClick={props.onSetTab.bind(null, 2)}>Contact</span>
    </div>
  );
};

export default Navigation;