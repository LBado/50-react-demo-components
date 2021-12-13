import React, { useState } from 'react';

import styles from './DrinkWater.module.css';
import SmallCup from './SmallCup';

const DrinkWater = () => {
  const liters = 2;
  const miliLiters = liters * 1000;
  const cupSize = 250;

  const [selectedIndex, setSelectedIndex] = useState();
  const [percentage, setPercentage] = useState(0);
  const [remainder, setRemainder] = useState(2);

  const indexSelectHandler = (index) => {
    setSelectedIndex(index);
    console.log(index);
    setPercentage(((cupSize * (index + 1)) / miliLiters) * 100);
    setRemainder((miliLiters - (index + 1) * cupSize) / 1000);
  };

  return (
    <div className={styles.dWContainer}>
      <h1>Drink Water</h1>
      <h3>Goal: 2 Liters a day!</h3>

      <div className={styles.cup}>
        <div style={{height: remainder === 0 ? 0 : ''}} className={styles.remained}>
          <span>{remainder} L</span>
          <small>Remains</small>
        </div>
        <div style={{ height: `${percentage}%`}} className={styles.percentage}>{percentage === 0 ? '' : `${percentage}%`}</div>
      </div>

      <p>Select how many cups of water have you drank so far</p>

      <div className={styles.cups}>
        {[...new Array(8)].map((cup, index) => (
          <SmallCup key={index} onClick={indexSelectHandler} selectedIndex={selectedIndex} index={index}/>
        ))}
      </div>
    </div>
  );
};

export default DrinkWater;
