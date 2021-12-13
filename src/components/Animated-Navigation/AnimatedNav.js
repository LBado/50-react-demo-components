import React, { useState } from 'react';

import styles from './AnimatedNav.module.css';

const AnimatedNav = () => {
  const [isActive, setIsActive] = useState(false);

  const isActiveHandler = () => {
    setIsActive(prev => !prev);
  };

  return (
    <div className={styles.aNContainer}>
      <nav className={`${styles.nav} ${isActive ? styles.active : ''}`}>
        <ul>
          <li><span>HOME</span></li>
          <li><span>WORK</span></li>
          <li><span>ABOUT</span></li>
          <li><span>CONTACT</span></li>
        </ul>
        <button onClick={isActiveHandler} className={styles.icon}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
        </button>
      </nav>
    </div>
  );
};

export default AnimatedNav;