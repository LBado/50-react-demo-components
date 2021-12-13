import React from 'react';
import { useState } from 'react';

import styles from './DragTarget.module.css';

const DragTarget = ({ children, setIsDragging }) => {

  const onDragStartHandler = () => {
    console.log('onDragStartHandler LOG');
    setIsDragging(true);
  };

  const onDragEndHandler = () => {
    console.log('onDragEndHandler LOG');
    setIsDragging(false);
  };

  return (
    <div
      onDragStart={onDragStartHandler}
      onDragEnd={onDragEndHandler}
      draggable="true"
    >
      {children}
    </div>
  );
};

export default DragTarget;
