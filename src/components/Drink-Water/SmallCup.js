import React from 'react';

import styles from './SmallCup.module.css';

const SmallCup = ({ index, selectedIndex, onClick }) => {

  const clickHandler = () => {
    if (index === selectedIndex) {
      onClick(index - 1);
      return;
    }

    onClick(index);
  };

  return (
    <div onClick={clickHandler}
      className={`${styles.cup} ${styles['cup-small']} ${
        selectedIndex >= index ? styles.full : ''
      }`}
    >
      250ml
    </div>
  );
};

export default SmallCup;
