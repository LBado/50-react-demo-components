import React, { useRef, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import useInterval from '../../hooks/useInterval';

import styles from './AnimatedCountdown.module.css';
import CounterNumber from './CounterNumber';

// const animationTiming = {
//   enter: 500,
//   exit: 500,
// };

const AnimatedCountdown = () => {
  const [counter, setCounter] = useState(-1);
  const [delay, setDelay] = useState(1000);
  // const nodeRef = useRef(null);
  // console.log(array.length);
  console.log(counter);

  useInterval(() => {
    console.log('Running Interval');
    if (counter > 3) {
      setDelay(null);
      return;
    }
    setCounter((prev) => prev + 1);
    console.log(counter);
    // setCounter(false);
  }, delay);

  const counterHandler = () => {
    setCounter(1);
    setDelay(1000);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.counter} ${counter > 3 ? styles.hide : ''}`}>
        <div className={styles.nums}>
          <TransitionGroup component={null}>
            {[...new Array(4)].map((item, index) => (
              <CounterNumber key={index} counterNo={counter} index={index} />
            ))}
          </TransitionGroup>
        </div>
        <h4>GetReady</h4>
      </div>
      <div className={`${styles.final} ${counter > 3 ? styles.show : ''}`}>
        <h1>GO</h1>
        <button onClick={counterHandler} className={styles.replay}>
          Replay
        </button>
      </div>
      {/* <button
        onClick={() => {
          setCounter(prev => prev+ 1);
          // setDelay(500);
        }}
      >
        PRESS
      </button> */}
    </div>
  );
};

export default AnimatedCountdown;
