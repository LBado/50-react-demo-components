import React from 'react';
import { useState } from 'react';
import useInterval from '../../hooks/useInterval';

import styles from './ThemeClock.module.css';

const ThemeClock = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [delay, setDelay] = useState(500);
  const [isRunning, setIsRunning] = useState(true);
  const [blink, setBlink] = useState(0);
  const [clockTime, setClockTime] = useState({
    month: '',
    day: '',
    hours: '',
    minutes: '',
    seconds: '',
  });

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const darkModeHandler = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      return;
    }
    setIsDarkMode(true);
  };

  const modeText = isDarkMode ? 'Light Mode' : 'Dark Mode';

  useInterval(
    () => {
      const time = new Date();
      const month = time.getMonth();
      const day = time.getDay();
      const dayDate = time.getDate();
      const hours = time.getHours();
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();
      const hoursForClock = hours % 12; //dobimo ostanek npr: 13 = 1

      setBlink((blink) => blink + 1);

      setClockTime({
        month: months[month],
        day: days[day],
        timeDay: dayDate,
        timeHours: hours,
        timeMinutes: minutes,
        hours: `${hoursForClock * 30}deg`,
        minutes: `${minutes * 6}deg`,
        seconds: `${seconds * 6}deg`,
      });
    },
    isRunning ? delay : null
  );

  const timeStyle = {
    hoursStyle: {
      transform: `translate(0%, -100%) rotateZ(${clockTime.hours})`,
    },
    minutesStyle: {
      transform: `translate(0%, -100%) rotateZ(${clockTime.minutes})`,
    },
    secondsStyle: {
      transform: `translate(0%, -100%) rotateZ(${clockTime.seconds})`,
    },
  };

  return (
    <div className={`${styles.tCContainer} ${isDarkMode ? styles.dark : ''}`}>
      <div className={styles['clock-container']}>
        <div className={styles.clock}>
          <div
            style={timeStyle.hoursStyle}
            className={`${styles.needle} ${styles.hour}`}
          ></div>
          <div
            style={timeStyle.minutesStyle}
            className={`${styles.needle} ${styles.minute}`}
          ></div>
          <div
            style={timeStyle.secondsStyle}
            className={`${styles.needle} ${styles.second}`}
          ></div>
          <div className={styles['center-point']}></div>
        </div>
        <div className={styles.time}>
          {clockTime.timeHours}:{clockTime.timeMinutes < 10 ? `0${clockTime.timeMinutes}` : clockTime.timeMinutes}
        </div>
        <hr style={{ width: '80%' }}></hr>
        <div className={styles.date}>
          {clockTime.day}, {clockTime.month}{' '}
          <span className={styles.circle}>{clockTime.timeDay}</span>
        </div>
        <button onClick={darkModeHandler} className={styles.toggle}>
          {modeText}
        </button>
      </div>
    </div>
  );
};

export default ThemeClock;
