import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useTimeout from '../../hooks/useTimeout';

import styles from './ButtonRipple.module.css';

const ButtonRipple = () => {
  const [rippleCoords, setRippleCoords] = useState({
    top: '27px',
    left: '50px',
  });

  const [rippleIsActive, setRippleIsActive] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const buttonRippleHandler = (event) => {
    event.preventDefault();
    setRippleCoords({
      left: `${event.pageX - event.target.getBoundingClientRect().left}px`,
      top: `${event.pageY - event.target.getBoundingClientRect().top}px`,
    });
    console.log(rippleCoords);

    setRippleIsActive(true);
    setIsRunning(true);
  };

  useTimeout(
    () => {
      setRippleIsActive(false);
      setIsRunning(false);
    },
    isRunning ? 300 : null
  );

  // useInterval(()=>{
  //   setCounter(counter - 1);
  //   console.log(counter);
  //   //izberemo random index
  //   //poiščemo v stateu index in ga settamo to true
  //   //true doda class
  //   setStyleIndex(Math.floor(Math.random() * tagsArr.length));
  //   console.log('Style index:');
  //   console.log(styleIndex);
  //   if (counter === 0) {
  //     setIsRunning(false);
  //     setCounter(0);
  //     setShowRerun(true);
  //   }
  // }, isRunning ? delay : null);

  // useEffect(()=>{
  //   setRippleIsActive(true);
  // },[rippleCoords]);

  console.log('Reload');
  console.log(rippleIsActive);

  return (
    <button onClick={buttonRippleHandler} className={styles.btn}>
      CLICK ME
      {rippleIsActive && (
        <span className={styles.ripple} style={rippleCoords}></span>
      )}
    </button>
  );
};

export default ButtonRipple;
