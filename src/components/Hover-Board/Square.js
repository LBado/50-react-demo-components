import React, { useEffect, useMemo, useState } from 'react';
import useTimeout from '../../hooks/useTimeout';

import styles from './Square.module.css';

const Square = ({ triggeredNo, index }) => {
  const [isActive, setIsActive] = useState(false);
  const [delay, setDelay] = useState(null);
  const [color, setColor] = useState(['#9CFF33', '#44859E', '#F0437A']);

  useTimeout(() => {
    console.log(isActive);
    console.log(delay);
    console.log('running timeout');
    setIsActive(false);
    setDelay(null);
  }, delay);

  useEffect(() => {
    console.log('UseEffect triggeredNo' + triggeredNo);
    // if (triggeredNo < index) {
    //   setIsActive(true);
    //   setDelay(index * 0.3 * 10);
    // }

    if (triggeredNo === index) {
      //če ga aktiviramo potem ga moramo po 1.5sec deaktivirati
      setIsActive(true);
      setDelay(90);
    }
  }, [triggeredNo, index]);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const generateColorArr = () => {
    const randos = [];
    for (let i = 0; i < 3; i++) {
      const random = getRandomColor();
      randos.push(random);
    }
    console.log(randos);
    return randos;
  };

  const mouseOverHandler = (e) => {
    e.preventDefault();
    setColor(generateColorArr());
    // console.log(getRandomColor());
    // console.log('picked color: ' + color[0]);
  };

  const enterStyle = {
    '--rngColor': `${color[Math.floor(Math.random() * 3)]}`,
  };

  return (
    <div
      style={enterStyle}
      onMouseEnter={mouseOverHandler}
      className={`${styles.square} ${isActive ? styles.active : ''}`}
    ></div>
  );
};

export default Square;
