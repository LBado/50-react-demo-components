import React, { useState } from 'react';
import useInterval from '../../hooks/useInterval';
import useTimeout from '../../hooks/useTimeout';

import styles from './AnimatedCountdown.module.css';

const AnimatedCountdown = () => {
  const [counter, setCounter] = useState(3);
  const [delay, setDelay] = useState(1000);
  const [animationEnd, setAnimationEnd] = useState('');

  useInterval(() => {
    console.log('Running Interval');
    if (counter < 0) {
      setDelay(null);
      return;
    }
    setCounter((prev) => prev - 1);
    console.log(counter);
  }, delay);

  const counterHandler = () => {
    setCounter(3);
    setDelay(1000);
  };

  const animationHandler = (elNo) => {
    console.log('setting animation ' + elNo);
    setAnimationEnd(elNo);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.counter} ${counter > -1 ? '' : styles.hide}`}>
        <div className={styles.nums}>
          <span
            onAnimationEnd={animationHandler.bind(null, 3)}
            className={`${counter === 3 ? styles.in : ''} ${
              animationEnd === 3 ? styles.out : ''
            }`}
          >
            3
          </span>
          <span
            onAnimationEnd={animationHandler.bind(null, 2)}
            className={`${counter === 2 ? styles.in : ''} ${
              animationEnd === 2 ? styles.out : ''
            }`}
          >
            2
          </span>
          <span
            onAnimationEnd={animationHandler.bind(null, 1)}
            className={`${counter === 1 ? styles.in : ''} ${
              animationEnd === 1 ? styles.out : ''
            }`}
          >
            1
          </span>
          <span
            onAnimationEnd={animationHandler.bind(null, 0)}
            className={`${counter === 0 ? styles.in : ''} ${
              animationEnd === 0 ? styles.out : ''
            }`}
          >
            0
          </span>
        </div>
        <h4>GetReady</h4>
      </div>
      <div className={`${styles.final} ${counter < 0 ? styles.show : ''}`}>
        <h1>GO</h1>
        <button onClick={counterHandler} className={styles.replay}>
          Replay
        </button>
      </div>
    </div>
  );
};

export default AnimatedCountdown;
