import React from 'react';
import { useState } from 'react';

import styles from './DragNDrop.module.css';
import DragNDropTasks from './DragNDropTasks';
import DragTarget from './DragTarget';
import DropTarget from './DropTarget';

const DragNDrop = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [location, setLocation] = useState('target1');
  console.log(isDragging);

  const setDraggingHandler = (value) => {
    setIsDragging(value);
  };

  const dragItem = (
    <DragTarget setIsDragging={setDraggingHandler} isDragging={isDragging}>
      <div className={`${styles.fill} ${isDragging ? styles.hold : ''}`}></div>
    </DragTarget>
  );

  const setLocationHandler = (value) => {
    setLocation(value);
  };

  return (
    <React.Fragment>
    <div className={styles.dDContainer}>
      <DropTarget
        isDragging={isDragging}
        dragItem={dragItem}
        id="target1"
        setLocation={setLocationHandler}
        locationId={location}
        setIsDragging={setDraggingHandler}
      />
      <DropTarget
        isDragging={isDragging}
        dragItem={dragItem}
        id="target2"
        setLocation={setLocationHandler}
        locationId={location}
        setIsDragging={setDraggingHandler}
      />
      <DropTarget
        isDragging={isDragging}
        dragItem={dragItem}
        id="target3"
        setLocation={setLocationHandler}
        locationId={location}
        setIsDragging={setDraggingHandler}
      />
    </div>
    <DragNDropTasks/>
    </React.Fragment>
  );
};

export default DragNDrop;
