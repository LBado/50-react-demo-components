import React, { useState } from 'react';
import useInterval from '../../hooks/useInterval';

import styles from './AutoText.module.css';

const AutoText = () => {
  const [string, setString] = useState('Welcome to this demo.');
  const [stringArr, setStringArr] = useState([]);
  const [index, setIndex] = useState(0);
  const [delay, setDelay] = useState(100);

  useInterval(
    () => {
      const slicedString = string.slice(0, index);
      const slicedStringArr = slicedString.split('');

      setStringArr(slicedStringArr);
      setIndex((prev) => prev + 1);

      if (stringArr.length === string.length) {
        setDelay(null);
        setIndex(0);
        // setStringArr([]);
      }
    },
    delay ? delay : null
  );

  return (
    <div className={styles.aTContainer}>
      {stringArr.map((item, index) => {
        console.log(item);
        if (item === ' ') {
          console.log('its empty');
          return <span key={index}>&nbsp;</span>;
        } else {
          return (
            <span className={styles.letter} key={index}>
              {item}
            </span>
          );
        }
      })}
    </div>
  );
};

export default AutoText;
