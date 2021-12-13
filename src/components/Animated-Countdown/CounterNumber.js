import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import useTimeout from '../../hooks/useTimeout';

import styles from './CounterNumber.module.css';

const CounterNumber = ({ counterNo, index }) => {
  const animationTiming = {
    enter: 1000,
    enterActive: 1000,
    exit: 1000,
    exitActive: 1000,
  };

  const nodeRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={counterNo === index}
      timeout={800}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: styles['number-enter'],
        enterActive: styles['number-enter-active'],
        exitActive: styles['number-exit-active'],
        exit: styles['number-exit'],
      }}
    >
      <span ref={nodeRef}>{counterNo}</span>
    </CSSTransition>
  );
};

export default CounterNumber;
