import React, { useState } from 'react';

import styles from './GetKeyCode.module.css';

const GetKeyCode = () => {

  const [keyCode, setKeyCode] = useState();
  const [code, setCode] = useState();
  const [key, setKey] = useState();

  const keyHandler = (event) => {
    setKeyCode(event.keyCode);
    setCode(event.code);
    setKey(event.code === 'Space' ? 'Space' : event.key);
  };

  return (
    <div className={styles.gKContainer} tabIndex='1' onKeyDown={keyHandler}>
      <small>PRESS KEY TO GET THE KEY CODE</small>
      <h1>KEY {key}</h1>
      <div className={styles['key-container']}>
        <div className={styles.key}>
          <span>{key}</span>
          <small>event.key</small>
        </div>
        <div className={styles.key}>
          <span>{keyCode}</span>
          <small>event.keyCode</small>
        </div>
        <div className={styles.key}>
          <span>{code}</span>
          <small>event.code</small>
        </div>
      </div>
    </div>
  );
};

export default GetKeyCode;