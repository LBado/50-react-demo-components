import React, { useState } from 'react';
import FormInput from '../../UI/Form-Input/FormInput';

import styles from './FormWave.module.css';

const FormWave = () => {
  // const [emailIsFocused, setEmailIsFocused] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(true);

  const [passwordFocused, setPasswordFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);

  const [inputEmail, setInputEmail] = useState(null);
  const [inputPassword, setInputPassword] = useState(null);

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const email = 'eMail';
  const emailArr = email.split('');

  const emailFn = emailArr.map((letter, index) => (
    <span
      key={index}
      style={{
        // '--animation': `${0.5 + 0.2 * index}s`,
        transitionDelay: `${30 * index}ms`,
      }}
      className={emailFocused ? styles.spanFocus : null}
    >
      {letter}
    </span>
  ));

  // const [passwordIsFocused, setPasswordIsFocused] = useState(false);

  const password = 'Password';
  const passwordArr = password.split('');

  const passwordFn = passwordArr.map((letter, index) => (
    <span
      key={index}
      style={{
        // '--animation': `${0.5 + 0.2 * index}s`,
        transitionDelay: `${30 * index}ms`,
        // transform: `${isPassword ? 'translateY(-1.5em)' : null}`,
      }}
      className={passwordFocused ? styles.spanFocus : null}
    >
      {letter}
    </span>
  ));

  //naredi z focus in blur

  return (
    <div className={styles.fWContainer}>
      <h1>Please Login</h1>
      <form className={styles['form-container']}>
        <div className={styles.formControl}>
          <input
            id="label"
            className={`${styles.input} ${
              emailFocused ? styles.inputFocus : ''
            }`}
            onFocus={() => setEmailFocused(true)}
            onBlur={() =>
              emailValue.length === 0 ? setEmailFocused(false) : null
            }
            onChange={(e) => setEmailValue(e)}
          ></input>
          <label htmlFor="label" className={styles.label}>
            {emailFn}
          </label>
        </div>
        <div className={styles.formControl}>
          <input
            type="password"
            id="label"
            className={`${styles.input} ${
              passwordFocused ? styles.inputFocus : ''
            }`}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() =>
              passwordValue.length === 0 ? setPasswordFocused(false) : null
            }
            onChange={(e) => setPasswordValue(e)}
          ></input>
          <label htmlFor="label" className={styles.label}>
            {passwordFn}
          </label>
        </div>
        {/* <FormInput
          labelStyle={styles.label}
          inputStyle={styles.input}
          formControlStyle={styles.formControl}
          label={emailFn}
        />
        <FormInput
          labelStyle={styles.label}
          inputStyle={styles.input}
          formControlStyle={styles.formControl}
          label={passwordFn}
        /> */}
        <button onClick={(event) => event.preventDefault()}>Login</button>
        <p>
          Dont have an Acount? <span>REGISTER</span>
        </p>
      </form>
    </div>
  );
};

export default FormWave;
