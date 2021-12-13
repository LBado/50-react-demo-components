import React, { useEffect, useState } from 'react';
import useAnimationFrame from '../../hooks/useAnimationFrame';

import styles from './MovingGradient.module.css';

//ko se komponenta reloada zaradi gradientPos
//se useEffect ne izvede ponovno /samo prvič in če ima dependency
//render fn se izvede v useEffect in kliče sama sebe dokler
//ne zapustimo page-a ker potem se izvede "cleanup funkcija"

const MovingGradient = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [gradientPos, setGradientPos] = useState();
  // console.log('rendering component...');
  // console.log(gradientPos);

  const animateGradient = (frameCount) => {
    const value = (
      0.5 *
      (1 + Math.sin(2 * Math.PI * 0.01 * frameCount)) *
      100
    ).toFixed(0);
    setGradientPos(value);
  };

  useAnimationFrame(animateGradient, isRunning);
  
  const graStyle = {
    '--graValue': `${gradientPos}%`,
  };

  return (
    <div
      onClick={() => {
        setGradientPos(Math.random());
      }}
      className={styles.mGContainer}
    >
      <div style={graStyle} className={styles['gradient-box']}></div>
      <button onClick={()=>setIsRunning(prev => !prev)}>Run / Stop</button>
    </div>
  );
};

export default MovingGradient;
