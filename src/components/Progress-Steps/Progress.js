import React from 'react';

import styles from './Progress.module.css';
import TickIcon from './TickIcon';

//če imamo 4 stopnje:
//0/3 = 0, 1/3=0.33... iščemo prostor vmes(med prsti) in ne sode npr. 1/4=0.25

const Progress = (props) => {
  const style = {
    '--content': 'null',
  };

  return (
    <div className={styles['progress-container']}>
      <div
        style={{ width: `${((props.step - 1) / (props.maxSteps - 1)) * 100 }%` }}
        className={styles['progress-bar']}
      ></div>
      {[...Array(props.maxSteps)].map((step, index) => (
        <div
          key={index}
          className={`${styles.step} ${
            props.step > index ? styles.active : ''
          }`}
          style={props.step > index + 1 ? style : { '--var': '' }}
        >
          {props.step > index + 1 && <TickIcon />}
          {/* <p>{index + 1}</p> */}
        </div>
      ))}
    </div>
  );
};

export default Progress;
