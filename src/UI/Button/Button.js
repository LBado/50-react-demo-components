import React from 'react';

import styles from './Button.module.css';

const Button = (props) => {
  
  //če je props.red true potem naj bo styles.red
  let buttonStyle = '';

  buttonStyle = props.red ? styles.red : (props.blue ? styles.blue : styles.default);

  return (
    <button className={buttonStyle}>
      {props.children}
    </button>
  );
};

export default Button;