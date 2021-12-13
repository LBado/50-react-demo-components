import React, { createRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from './SearchBar.module.css';

const SearchBar = () => {
  const textInput = createRef();

  const [active, setActive] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const toggleActiveHandler = () => {
    setActive((prev) => !prev);
    if (!isFocus) {
      setIsFocus((prev) => !prev);
      textInput.current.focus();
      return;
    }
    textInput.current.blur();
    setIsFocus((prev) => !prev);
  };

  return (
    <div className={styles['search-bar']}>
      <button
        className={`${styles.btn} ${active ? styles.active : ''}`}
        onClick={toggleActiveHandler}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <input
        type="text"
        className={`${styles.input} ${active ? styles.active : ''}`}
        placeholder="Search..."
        ref={textInput}
      ></input>
    </div>
  );
};

export default SearchBar;
