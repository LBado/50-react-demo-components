import React, { useState } from 'react';
import useInterval from '../../hooks/useInterval';

import styles from './MediaCounterContainer.module.css';

const MediaCounterContainer = ({ icon, counterMax, speed, title }) => {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const increment = counterMax / speed;

  useInterval(
    () => {
      if (counter === counterMax - increment) {
        setIsRunning(false);
      }
      setCounter((prev) => prev + increment);
    },
    isRunning ? 1 : null
  );

  return (
    <div className={styles['counter-container']}>
      <span className={styles.icon}>{icon}</span>
      <div className={styles.counter}>{counter}</div>
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default MediaCounterContainer;
