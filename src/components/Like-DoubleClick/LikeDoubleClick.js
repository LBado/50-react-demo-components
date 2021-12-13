import React, { useState } from 'react';
import useTimeout from '../../hooks/useTimeout';

import styles from './LikeDoubleClick.module.css';

const LikeDoubleClick = () => {
  const [heartIsActive, setHearthIsActive] = useState(false);
  const [heartPos, setHeartPos] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [clickTime, setClickTime] = useState(0);

  const imageClickHandler = (e) => {
    if (clickTime === 0) {
      const date = new Date().getTime();
      setClickTime(date);
      console.log('clicked first');
    } else {
      const newDate = new Date().getTime();
      if (newDate - clickTime < 800) {
        console.log(e.pageY - e.target.getBoundingClientRect().y);
        const posY = e.pageY - e.target.getBoundingClientRect().y;
        const posX = e.pageX - e.target.getBoundingClientRect().x;
        setHeartPos({
          top: posY,
          left: posX,
        });
        setHearthIsActive(true);
        setIsRunning(true);
        console.log('second click');
      } else {
        const newClick = new Date().getTime();
        setClickTime(newClick);
        console.log('setting first click again');
      }
    }
  };

  useTimeout(
    () => {
      setHearthIsActive(false);
      setIsRunning(false);
    },
    isRunning ? 300 : null
  );

  return (
    <div className={styles.lDCContainer}>
      <div className={styles.info}>
        <h2>Double click on image to &#9825; it!</h2>
        <p>
          You liked it <span>12</span> times!
        </p>
      </div>
      <div onClick={imageClickHandler} className={styles.image}>
        {heartIsActive && (
          <span style={heartPos} className={styles.heart}>
            &#10084;
          </span>
        )}
      </div>
    </div>
  );
};

export default LikeDoubleClick;
