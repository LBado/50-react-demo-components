import React, { useState } from 'react';

import styles from './PasswordGenerator.module.css';

const PasswordGenerator = () => {
  const [isUppercase, setIsUppercase] = useState(true);
  const [isLowercase, setIsLowercase] = useState(true);
  const [isNumbers, setIsNumbers] = useState(true);
  const [isSymbols, setIsSymbols] = useState(true);
  const [pwdLength, setPwdLength] = useState(20);
  const [genPassword, setGenPassword] = useState();

  const setPwdLengthHandler = (e) => {
    setPwdLength(+e.target.value);
    console.log(pwdLength);
  };

  const getRandomLower = () => {
    //lowercase 'a' je 97 in če prištejemo random num do max 26 dobimo
    //drug lowercase letter
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  };

  const getRandomUpper = () => {
    //65 se začne 'A'
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  };

  const getRandomNumber = () => {
    //65 se začne 'A'
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  };

  const getRandomSymbol = () => {
    const symbols = '!@#$%&*(){}=<>/,.^';
    return symbols[Math.floor(Math.random() * symbols.length)];
  };

  const funs = [
    getRandomLower,
    getRandomUpper,
    getRandomSymbol,
    getRandomNumber,
  ];

  const randomFun = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
  };

  const pwdGenHandler = () => {
    let pwd = '';
    let functions = [];

    if (isUppercase) {
      functions.push(getRandomUpper);
    }
    if (isLowercase) {
      functions.push(getRandomLower);
    }
    if (isNumbers) {
      functions.push(getRandomNumber);
    }
    if (isSymbols) {
      functions.push(getRandomSymbol);
    }

    if (functions.length === 0) {
      console.log('Cant generate password with no parameters!');
      return;
    }
    console.log(functions);

    console.log(getRandomLower());
    console.log(getRandomUpper());
    console.log(getRandomNumber());
    console.log(getRandomSymbol());

    for (let i = 0; i < pwdLength; i++) {
      const rando = functions[Math.floor(Math.random() * functions.length)]();
      pwd = pwd + rando;
    }

    console.log(pwd);

    setGenPassword(pwd);

    console.log(funs[Math.floor(Math.random() * funs.length)]());
  };

  const clipboardHandler = () => {
    if (!genPassword) {
      return;
    }

    navigator.clipboard.writeText(genPassword);

    console.log('copied to clipboard!');
  };

  return (
    <div className={styles.pGContainer}>
      <h2>Password generator</h2>
      <div className={styles['result-container']}>
        <span className={styles.result}>{genPassword}</span>
        <button onClick={clipboardHandler} className={styles.clipboard}>
          &#x2398;
        </button>
      </div>
      <div className={styles.settings}>
        <div className={styles.setting}>
          <label>Password length</label>
          <input
            type="number"
            className={styles.length}
            min="4"
            max="20"
            value={pwdLength}
            onChange={setPwdLengthHandler}
          ></input>
        </div>
        <div className={styles.setting}>
          <label>Include uppercase letters</label>
          <input
            type="checkbox"
            className={styles.uppercase}
            defaultChecked={isUppercase}
            onChange={() => {
              setIsUppercase((prev) => !prev);
              console.log(isUppercase);
            }}
          ></input>
        </div>
        <div className={styles.setting}>
          <label>Include lowercase letters</label>
          <input
            type="checkbox"
            className={styles.lowercase}
            defaultChecked={isLowercase}
            onChange={() => {
              setIsLowercase((prev) => !prev);
              console.log(isLowercase);
            }}
          ></input>
        </div>
        <div className={styles.setting}>
          <label>Include numbers</label>
          <input
            type="checkbox"
            className={styles.numbers}
            defaultChecked={isNumbers}
            onChange={() => {
              setIsNumbers((prev) => !prev);
              console.log(isNumbers);
            }}
          ></input>
        </div>
        <div className={styles.setting}>
          <label>Include symbols</label>
          <input
            type="checkbox"
            className={styles.symbols}
            defaultChecked={isSymbols}
            onChange={() => {
              setIsSymbols((prev) => !prev);
              console.log(isSymbols);
            }}
          ></input>
        </div>
      </div>
      <button onClick={pwdGenHandler} type="button" className={styles.generate}>
        Generate password
      </button>
    </div>
  );
};

export default PasswordGenerator;
