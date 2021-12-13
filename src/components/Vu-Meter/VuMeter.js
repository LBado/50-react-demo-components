import React, { useState } from 'react';
import useInterval from '../../hooks/useInterval';

import styles from './VuMeter.module.css';
import Square from './Square';

const VuMeter = () => {
  const [activeNo, setActiveNo] = useState();

  useInterval(() => {
    setActiveNo(Math.random() * 20);
  }, 1000);

  return (
    <div className={styles.container}>
      {[...new Array(20)].map((item, index) => (
        <Square index={index} triggeredNo={activeNo} key={index} />
      ))}
      <button
        onClick={() => {
          setActiveNo(Math.random() * 20);
        }}
      >
        PRess
      </button>
    </div>
  );
};

export default VuMeter;
