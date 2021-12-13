import React from 'react';

import styles from './Panel.module.css';

const Panel = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`${styles.panel} ${
        props.id === props.activeId ? styles.active : ''
      }`}
      style={{
        backgroundImage: `url(${props.imgLink})`,
      }}
    >
      <h3>{props.title}</h3>
    </div>
  );
};

export default Panel;
