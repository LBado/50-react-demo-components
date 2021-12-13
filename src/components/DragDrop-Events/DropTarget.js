import React from 'react';
import { useState } from 'react';

import styles from './DropTarget.module.css';

const DropTarget = ({
  children,
  isDragging,
  dragItem,
  id,
  setLocation,
  locationId,
  setIsDragging
}) => {
  const [isDragEnter, setIsDragEnter] = useState(false);

  const onDragOverHandler = (event) => {
    //prevent default to allow drop
    event.preventDefault();
  };

  const onDragEnterHandler = () => {
    setIsDragEnter(true);
  };

  const onDragLeaveHandler = () => {
    setIsDragEnter(false);
  };

  const onDropHandler = (location) => {
    console.log('Dropped');
    if (!isDragging) {
      return;
    }
    setIsDragging(false)
    setLocation(id);
  };

  return (
    <div
      className={`${styles.empty} ${isDragEnter ? styles.dragOver : null}`}
      onDragOver={onDragOverHandler}
      onDrop={onDropHandler}
      onDragEnter={onDragEnterHandler}
      onDragLeave={onDragLeaveHandler}
    >
      {locationId === id ? dragItem : ''}
    </div>
  );
};

export default DropTarget;
