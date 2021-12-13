import React from 'react';
import { useState } from 'react';

import styles from './BackgroundSlider.module.css';

const _BACKGROUNDS = [
  'https://images.unsplash.com/photo-1630258734586-bb83c3210222?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1475082211816-b48baf3f69e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1630182045674-3b2a18e36cd7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1532986052104-d5de91a1211e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80',
];

const BackgroundSlider = () => {
  const [bgNum, setBgNum] = useState(3);

  const bgStyle = {
    backgroundImage: `url(${_BACKGROUNDS[bgNum]})`,
  };

  const nextHandler = () => {
    if (bgNum === _BACKGROUNDS.length - 1) {
      setBgNum(0);
      return;
    }
    setBgNum(prev => prev + 1);
  };
  
  const prevHandler = () => {
    if (bgNum === 0) {
      setBgNum(_BACKGROUNDS.length - 1);
      return;
    }
    setBgNum(prev => prev - 1);
  };

  return (
    <div style={bgStyle} className={styles.bSContainer}>
      <div className={styles.slider}>
        <div style={bgStyle} className={styles.slide}></div>
      </div>
      <button onClick={nextHandler} className={`${styles.btn} ${styles.next}`}>NEXT</button>
      <button onClick={prevHandler} className={`${styles.btn} ${styles.prev}`}>PREVIOUS</button>
    </div>
  );
};

export default BackgroundSlider;
