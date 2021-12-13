import React, { useEffect, useRef, useState } from 'react';
import useTimeout from '../../hooks/useTimeout';

import styles from './Toast.module.css';

const Toast = ({ children, onRemove, id }) => {
  const timerRef = useRef();
  const removeToast = () => {
    console.log('time for removal of ' + id);
    onRemove(id);
  };

  useEffect(() => {
    timerRef.current = setTimeout(removeToast, 500);
    return () => {
      console.log('clearing timeout!');
      clearTimeout(timerRef.current);
    };
  });

  return (
    <div className={styles.toast}>
      {children} {id}
    </div>
  );
};

export default Toast;
