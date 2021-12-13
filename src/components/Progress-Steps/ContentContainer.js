import React from 'react';
import Content from './Content';

import styles from './ContentContainer.module.css';
//naredimo containerjev toliko kot mamo stepov

const ContentContainer = (props) => {
  const step = props.step;
  return (
    <div className={styles['content-container']}>
      {props.content.map((item, index) => (
        <Content step={step} key={item.id} id={item.id} index={index} content={item.content}/>
    ))}
    </div>
  );
};

export default ContentContainer;