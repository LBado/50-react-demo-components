import React, { useEffect, useState } from 'react';
import useTimeout from '../../hooks/useTimeout';

import styles from './VuSquare.module.css';

const VuSquare = ({ triggeredNo, index }) => {
  const [isActive, setIsActive] = useState(false);
  const [delay, setDelay] = useState(null);

  useTimeout(() => {
    console.log(isActive);
    console.log(delay);
    console.log('running timeout');
    setIsActive(false);
    setDelay(null);
  }, delay);

  useEffect(() => {
    console.log('UseEffect triggeredNo');
    if (triggeredNo < index) {
      setIsActive(true);
      setDelay((index * 0.3) * 100);
    }

    if (triggeredNo === index) {
      //če ga aktiviramo potem ga moramo po 1.5sec deaktivirati
      setIsActive(true);
      setDelay(400);
    }
  }, [triggeredNo, index]);

  return (
    <div className={`${styles.square} ${isActive ? styles.active : ''}`}></div>
  );
};

export default VuSquare;
