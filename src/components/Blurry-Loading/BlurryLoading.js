import React, { useEffect, useState } from 'react';

import styles from './BlurryLoading.module.css';

const BlurryLoading = () => {
  const [blurValue, setBlurValue] = useState(0);

  // useEffect(() => {
  //   //slabo ker se vsakič naredi nov interval
  //   let interval = '';
  //   console.log(interval);
  //   if (blurValue < 100) {
  //     interval = setInterval(() => {
  //       setBlurValue((prev) => prev + 1);
  //     }, 30);
  //   }
  //   return () => clearInterval(interval);
  // }, [blurValue]);

  useEffect(() => {
    let timeout = '';
    if (blurValue < 100) {
      timeout = setTimeout(() => {
        setBlurValue((counter) => counter + 1);
      }, 10);
    }
    return () => clearTimeout(timeout);
  }, [blurValue]);

  //out spreminjamo za smer (iz min op. do max op)
  const scale = (num, in_min, in_max, out_min, out_max ) => {
    //blurValue, 0 , 100, 1, 0
    return (num - in_min ) * (out_max - out_min) / (in_max - in_min) + out_min;
    //1 - 0 * 0 - 1 / 100 - 0 + 1
  };

  //gre iz 0 do 100 opacity
  // const calcOpacity = (value) => {
  //   return value * 0.01 * 1;
  // };

  return (
    <div className={styles.container}>
      {/* <div style={{ '--blurValue': `${scale(blurValue, 0, 100, 30, 0)}px` }} className={styles.bg}></div> */}
      <div style={{ filter: `blur(${scale(blurValue, 0, 100, 30, 0)}px)` }} className={styles.bg}></div>
      <div style={{ opacity: scale(blurValue, 0, 100, 1, 0) }} className={styles['loading-text']}>{`${blurValue}%`}</div>
    </div>
  );
};

export default BlurryLoading;
