import React, { useState } from 'react';
import { Fragment } from 'react';
import useInterval from '../../hooks/useInterval';

import styles from './HoverBoard.module.css';
import Square from './Square';

const HoverBoard = () => {
  const [activeNo, setActiveNo] = useState();
  const [isRunning, setIsRunning] = useState(false);

  useInterval(
    () => {
      setActiveNo(Math.floor(Math.random() * 108));
    },
    isRunning ? 100 : null
  );

  return (
    <Fragment>
      <div className={styles.hBContainer}>
        {[...new Array(108)].map((item, index) => (
          <Square
            index={index}
            triggeredNo={activeNo === index ? activeNo : undefined}
            key={index}
          />
        ))}
      </div>
      <button
        onClick={() => {
          setActiveNo(Math.floor(Math.random() * 108));
        }}
      >
        Press Random
      </button>
      <button
        onClick={() => {
          setIsRunning((prev) => !prev);
        }}
      >
        Toggle animation
      </button>
    </Fragment>
  );
};

export default HoverBoard;
