import React, { useState } from 'react';
import { Fragment } from 'react';
import styles from './NavSidebar.module.css';
const NavSidebar = () => {
  const [isClicked, setIsClicked] = useState(false);
  console.log('rendering component');
  const clickHandler = () => {
    setIsClicked((prev) => !prev);
  };
  return (
    <Fragment>
      <button onClick={clickHandler} className={styles.menuOpen}>
        &#9776;
      </button>
      <div
        className={`${styles.nav} ${styles.black} ${
          isClicked ? styles.active : ''
        }`}
      >
        <div
          className={`${styles.nav} ${styles.red} ${
            isClicked ? styles.active : ''
          }`}
        >
          <div
            className={`${styles.nav} ${styles.white} ${
              isClicked ? styles.active : ''
            }`}
          >
            <button className={styles.menuClose} onClick={clickHandler}>&#x2715;</button>
            <ul className={styles.list}>
              <li>Home</li>
              <li>About</li>
              <li>Team</li>
              <li>Location</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NavSidebar;
