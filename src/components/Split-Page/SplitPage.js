import React, { useState } from 'react';
import Button from '../../UI/Button/Button';

import styles from './SplitPage.module.css';

const SplitPage = () => {
  const [mouseEnter, setMouseEnter] = useState({ left: false, right: false });

  const mouseEnterHandler = (id) => {
    if (id === 'left') {
      setMouseEnter((prev) => {
        return { ...prev, left: true };
      });
    } else {
      setMouseEnter((prev) => {
        return { ...prev, right: true };
      });
    }
  };

  const mouseLeaveHandler = (id) => {
    if (id === 'left') {
      setMouseEnter((prev) => {
        return { ...prev, left: false };
      });
    } else {
      setMouseEnter((prev) => {
        return { ...prev, right: false };
      });
    }
  };

  return (
    <div className={styles.container}>
      <div
        onMouseEnter={mouseEnterHandler.bind(null, 'left')}
        onMouseLeave={mouseLeaveHandler.bind(null, 'left')}
        className={`${styles.split} ${styles.left} ${
          mouseEnter.left ? styles.hover : ''
        }`}
      >
        <Button>BLUE</Button>
      </div>
      <div
        onMouseEnter={mouseEnterHandler.bind(null, 'right')}
        onMouseLeave={mouseLeaveHandler.bind(null, 'right')}
        className={`${styles.split} ${styles.right} ${
          mouseEnter.right ? styles.hover : ''
        }`}
      >
        <Button>RED</Button>
      </div>
    </div>
  );
};

export default SplitPage;
