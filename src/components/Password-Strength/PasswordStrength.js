import React, { useState } from 'react';

import styles from './PasswordStrength.module.css';

const PasswordStrength = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageBlur, setImageBlur] = useState(8);
  const [progress, setProgress] = useState(0);

  const setEmailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const setPasswordHandler = (e) => {
    e.preventDefault();
    const pass = e.target.value.trim();
    console.log(pass);
    setPassword(pass);
    if (e.target.value.length <= 8) {
      setImageBlur(8 - e.target.value.length);
      console.log(imageBlur);
    }

    if (e.target.value.length <= 8) {
      console.log(progress);
      setProgress(10 * 1.25 * e.target.value.length);
    }
  };

  const bgStyle = {
    '--bg-image': `${imageBlur}px`,
    '--bg-progress': `${progress}%`,
    '--bg-progress-color': `${
      password.length >= 8 ? 'rgb(0, 255, 42)' : 'rgb(0, 119, 255)'
    }`,
  };

  return (
    <div className={styles.pSContainer}>
      <div style={bgStyle} className={styles.image}></div>
      <h3>Password strength de-blur-er</h3>
      <small>Enter a lengthy/strong password to see the effect</small>
      <form className={styles.form}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          onChange={setEmailHandler}
          placeholder="Enter Email"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={setPasswordHandler}
          value={password}
          placeholder="Enter Password"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default PasswordStrength;
