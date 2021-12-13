import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from './FaqCards.module.css';

const FaqCards = () => {
  const [isActive, setIsActive] = useState([false, false, false]);

  const toggleFaq = (i) => {
    console.log(isActive[i]);
    setIsActive(prev => {
      const arr = [...prev];
      arr[i] = !arr[i];
      return arr;
    });
    console.log(isActive[i]);
  };

  return (
    <div className={styles.fCContainer}>
      <div className={`${styles.faq} ${isActive[0] ? styles.active : ''}`}>
        <h3 className={styles['faq-title']}>Why shouldn't we trust atoms?</h3>
        <p className={styles['faq-text']}>Because atoms make up everything!</p>
        <button
          className={styles['faq-toggle']}
          onClick={toggleFaq.bind(null, 0)}
        >
          {!isActive[0] && <FontAwesomeIcon icon={faChevronDown} />}
          {isActive[0] && <FontAwesomeIcon icon={faTimes} />}
        </button>
        <FontAwesomeIcon icon={faComment} className={styles.faIcon} />
        <FontAwesomeIcon icon={faComment} className={styles.faIcon} />
      </div>
      <div className={`${styles.faq} ${isActive[1] ? styles.active : ''}`}>
        <h3 className={styles['faq-title']}>
          What do you call someone with no body and no nose?
        </h3>
        <p className={styles['faq-text']}>Nobody knows!</p>
        <button
          className={styles['faq-toggle']}
          onClick={toggleFaq.bind(null, 1)}
        >
          {!isActive[1] && <FontAwesomeIcon icon={faChevronDown} />}
          {isActive[1] && <FontAwesomeIcon icon={faTimes} />}
        </button>
        <FontAwesomeIcon icon={faComment} className={styles.faIcon} />
        <FontAwesomeIcon icon={faComment} className={styles.faIcon} />
      </div>
      <div className={`${styles.faq} ${isActive[2] ? styles.active : ''}`}>
        <h3 className={styles['faq-title']}>
          What is object oriented way to become wealthy?
        </h3>
        <p className={styles['faq-text']}>Inheritance!</p>
        <button
          className={styles['faq-toggle']}
          onClick={toggleFaq.bind(null, 2)}
        >
          {!isActive[2] && <FontAwesomeIcon icon={faChevronDown} />}
          {isActive[2] && <FontAwesomeIcon icon={faTimes} />}
        </button>
        <FontAwesomeIcon icon={faComment} className={styles.faIcon} />
        <FontAwesomeIcon icon={faComment} className={styles.faIcon} />
      </div>
    </div>
  );
};

export default FaqCards;
