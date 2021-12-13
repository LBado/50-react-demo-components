import React, { useEffect, useState } from 'react';
let isInit = true;
const TodoItem = ({ onSetStatus, item }) => {
  // console.log('Rendering todo item');
  // console.log(item);

  // useEffect(() => {
  //   if (isInit) {
  //     isInit = false;
  //     return;
  //   }
  //   onSetStatus(item.id);
  // }, [onSetStatus, item.id]);

  const statusHandler = () => {
    // setIsCompleted(prev => !prev);
    onSetStatus(item.id);
  };

  return (
    <li
      style={
        item.completed
          ? {
              textDecoration: 'line-through',
              color: 'rgba(128, 128, 128, 0.4)',
            }
          : null
      }
      onClick={statusHandler}
    >
      {item.value}
    </li>
  );
};

export default TodoItem;
