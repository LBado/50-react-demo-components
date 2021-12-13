import React from 'react';

import styles from './Content.module.css';

const Content = (props) => {
  const letterArr = props.content.split('');
  return (
    <React.Fragment>
      {props.step === props.index + 1 && (
        <div className={styles.content}>
          {letterArr.map((letter, index) => (
            <p
              key={index}
              style={{
                '--animation': `${0.5 + 0.01 * index}s`,
              }}
              className={styles.letter}
            >
              {letter}
            </p>
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default Content;
