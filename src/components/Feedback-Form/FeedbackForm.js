import React, { useState } from 'react';
import { Fragment } from 'react';
import styles from './FeedbackForm.module.css';

const FeedbackForm = () => {
  const [selection, setSelection] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className={styles['form-container']}>
      {!isClicked ? (
        <Fragment>
          <h4>
            How satisfied are you with our <br /> customer support performance?
          </h4>
          <div className={styles.ratings}>
            <label className={selection === 1 ? styles.active : ''}>
              <input
                checked={selection === 1}
                onChange={() => setSelection(1)}
                type="checkbox"
              />
              <span>&#128542;</span>
              <small>Unhappy</small>
            </label>
            <label className={selection === 2 ? styles.active : ''}>
              <input
                checked={selection === 2}
                onChange={() => setSelection(2)}
                type="checkbox"
              />
              <span>&#128528;</span>
              <small>Neutral</small>
            </label>
            <label className={selection === 3 ? styles.active : ''}>
              <input
                checked={selection === 3}
                onChange={() => setSelection(3)}
                type="checkbox"
              />
              <span>&#128578;</span>
              <small>Satisfied</small>
            </label>
          </div>
          <button onClick={() => {setIsClicked(true)}}>Send Review</button>
        </Fragment>
      ) : (
        <Fragment>
          <span style={{color: 'red', fontSize: '32px'}}>&#9829;</span>
          <strong>Thank you!</strong>
          <br />
          <strong>Feedback selection: {selection}.</strong>
          <p>We'll use your feedback to imporve our customer support!</p>
        </Fragment>
      )}
    </div>
  );
};

export default FeedbackForm;
