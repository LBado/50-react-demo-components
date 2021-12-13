import React, { useState } from 'react';

import styles from './CheckboxSliders.module.css';

const CheckboxSliders = () => {
  const [isGood, setIsGood] = useState(false);
  const [isCheap, setIsCheap] = useState(false);
  const [isFast, setIsFast] = useState(false);

  return (
    <div className={styles.cbSContainer}>
      <div className={styles['toggle-container']}>
        <input
          onChange={() => {
            if (isCheap && isFast && !isGood) {
              setIsGood((prev) => !prev);
              setIsCheap((prev) => !prev);
              return;
            }
            setIsGood((prev) => !prev);
            console.log(isGood);
          }}
          checked={isGood}
          className={styles.input}
          type="checkbox"
          id="good"
        ></input>
        <label className={styles.label} htmlFor="good">
          <div className={styles.ball}></div>
        </label>
        <span>GOOD</span>
      </div>
      <div className={styles['toggle-container']}>
        <input
          onChange={() => {
            if (!isCheap && isFast && isGood) {
              setIsGood((prev) => !prev);
              setIsCheap((prev) => !prev);
              return;
            }
            setIsCheap((prev) => !prev);
          }}
          checked={isCheap}
          className={styles.input}
          type="checkbox"
          id="cheap"
        ></input>
        <label className={styles.label} htmlFor="cheap">
          <div className={styles.ball}></div>
        </label>
        <span>CHEAP</span>
      </div>
      <div className={styles['toggle-container']}>
        <input
          onChange={() => {
            if (isCheap && !isFast && isGood) {
              setIsGood((prev) => !prev);
              setIsFast((prev) => !prev);
              return;
            }
            setIsFast((prev) => !prev);
          }}
          checked={isFast}
          className={styles.input}
          type="checkbox"
          id="fast"
        ></input>
        <label className={styles.label} htmlFor="fast">
          <div className={styles.ball}></div>
        </label>
        <span>FAST</span>
      </div>
    </div>
  );
};

export default CheckboxSliders;
