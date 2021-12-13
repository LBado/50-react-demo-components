import React, { useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';

import styles from './DBoxes.module.css';

const DBoxes = () => {
  const [isBig, setIsBig] = useState(true);

  return (
    <div className={styles.dboxes}>
      <button
        onClick={() => {
          setIsBig((prev) => !prev);
        }}
      >
        Make Magix Happen
      </button>
      <div className={`${styles['box-container']} ${isBig ? styles.big : ''}`}>
        {[...new Array(4)].map((item, i) => (
          <Fragment>
            {[...new Array(4)].map((item2, j) => (
              <div
                key={j}
                style={{
                  backgroundPosition: `${-j * 125}px ${-i * 125}px`,
                }}
                className={styles.box}
              ></div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default DBoxes;
