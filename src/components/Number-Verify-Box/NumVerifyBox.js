import React, { useEffect, useState } from 'react';
import useFocus from '../../hooks/useFocus';
import NumInput from './NumInput';

import styles from './NumVerifyBox.module.css';

const NumVerifyBox = () => {
  const [focus, setFocus] = useState(0);

  const switchFocusHandler = (index) => {
    if (index === 5) {
      setFocus(null);
      return;
    }
    setFocus(index + 1);
    console.log('switching focus');
  };

  return (
    <div className={styles['num-container']}>
      <h2>Verify your account</h2>
      <p>
        An email confirmation, containing six digit code, has been sent to the
        following email address{' '}
        <span className={styles.email}>this.guy@email.com</span>
      </p>

      <p>Enter the code bellow to confirm account.</p>
      <div className={styles.nums}>
        {[...new Array(6)].map((item, index) => (
          <NumInput
            key={index}
            index={index}
            focusedNum={focus}
            onSwitchFocus={switchFocusHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default NumVerifyBox;
