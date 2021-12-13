import React, { useEffect, useState } from 'react';
import Content from './Content';
import Navigation from './Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './SlidingNavigation.module.css';

const SlidingNavigation = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [tabId, setTabId] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      closeMenuHandler();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [tabId]);

  const openMenuHandler = () => {
    setIsHidden((prev) => prev = true);
  };

  const closeMenuHandler = () => {
    setIsHidden((prev) => prev = false);
  };

  const selectTabHandler = (id) => {
    setTabId((prev) => (prev = id));
  };

  return (
    <div className={styles.container}>
      <Navigation onSetTab={selectTabHandler} />
      <div className={styles['btn-container']}>
        {isHidden && (
          <button className={styles.btnClose} onClick={closeMenuHandler}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        )}
        {!isHidden && (
          <button className={styles.btnOpen} onClick={openMenuHandler}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        )}
      </div>
      <Content tab={tabId} isHidden={isHidden} />
    </div>
  );
};

export default SlidingNavigation;
