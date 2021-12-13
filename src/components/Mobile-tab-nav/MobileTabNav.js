import React, { useState } from 'react';

import styles from './MobileTabNav.module.css';

const MobileTabNav = () => {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.mTNContainer}>
      <div className={styles['img-container']}>
        <img
          className={active === 0 ? styles.active : ''}
          src={'https://source.unsplash.com/random/600x800'}
          alt="main"
        ></img>
        <img
          className={active === 1 ? styles.active : ''}
          src={'https://source.unsplash.com/random/600x799'}
          alt="main"
        ></img>
        <img
          className={active === 2 ? styles.active : ''}
          src={'https://source.unsplash.com/random/600x798'}
          alt="main"
        ></img>
        <img
          className={active === 3 ? styles.active : ''}
          src={'https://source.unsplash.com/random/600x797'}
          alt="main"
        ></img>
      </div>
      <nav>
        <ul>
          <li
            onClick={() => setActive(0)}
            className={`${active === 0 ? styles.active : ''}`}
          >
            <h4>Home</h4>
          </li>
          <li
            onClick={() => setActive(1)}
            className={`${active === 1 ? styles.active : ''}`}
          >
            <h4>Work</h4>
          </li>
          <li
            onClick={() => setActive(2)}
            className={`${active === 2 ? styles.active : ''}`}
          >
            <h4>Blog</h4>
          </li>
          <li
            onClick={() => setActive(3)}
            className={`${active === 3 ? styles.active : ''}`}
          >
            <h4>About</h4>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileTabNav;
