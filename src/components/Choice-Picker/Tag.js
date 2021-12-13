import React from 'react';

import styles from './Tag.module.css';

const Tag = (props) => {
  return (
    <span className={`${styles.tag} ${props.styleIndex === props.id ? styles.highlight : ''}`}>
      {props.content}
    </span>
  );
};

export default Tag;
