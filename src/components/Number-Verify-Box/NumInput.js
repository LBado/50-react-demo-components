import React, { useEffect, useState } from 'react';
import useFocus from '../../hooks/useFocus';

import styles from './NumInput.module.css';

const NumInput = ({ focusedNum, index, onSwitchFocus }) => {
  console.log('re-rendering');
  console.log(focusedNum, index);

  const [inputValue, setInputValue] = useState('');
  const [inputRef, setInputFocus, setInputBlur] = useFocus();
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (focusedNum === index) {
      console.log('its true');
      setInputFocus();
    }
    if (focusedNum === null) {
      setInputBlur();
    }
  }, [focusedNum, index, setInputBlur, setInputFocus]);

  const inputFocusHandler = (e) => {
    const val = e.target.value;
    if (val.length > 1) {
      
      return;
    }
    setInputValue(val);
    setIsCorrect(false);
    if (val !== '') {
      onSwitchFocus(index);
      setIsCorrect(true);
    }
  };

  const keyDownHandler = (e) => {
    if (e.key === 'Backspace' && inputValue === '') {
      onSwitchFocus(index - 2);
      setIsCorrect(false);
    }
  };

  return (
    <input
      className={`${styles['num-input']} ${isCorrect && styles.correct}`}
      onChange={inputFocusHandler}
      onKeyDown={keyDownHandler}
      value={inputValue}
      ref={inputRef}
      type="number"
      maxLength="1"
      size="1"
      placeholder="0"
    ></input>
  );
};

export default NumInput;
