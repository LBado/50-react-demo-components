import React, { useState } from 'react';
import useAnimationFrame from '../../hooks/useAnimationFrame';

import styles from './PlaceholderCard.module.css';

const PlaceholderCard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [gradientPos, setGradientPos] = useState(null);

  const animateGradient = (frameCount) => {
    const value = (
      0.5 *
      (1 + Math.sin(2 * Math.PI * 0.01 * frameCount)) *
      100
    ).toFixed(0);
    setGradientPos(value);
  };

  useAnimationFrame(animateGradient, isLoading);

  const graStyle = {
    '--graPos': `${gradientPos}%`,
  };

  const isLoadingHandler = () => {
    setIsLoading(prev => prev = !prev);
  };

  return (
    <div style={graStyle} className={styles.pCContainer}>
      <div className={styles.card}>
        <div
          className={`${styles.header} ${
            isLoading ? styles['animated-bg'] : ''
          }`}
        >
          {isLoading ? '' : <img
            alt="header"
            src="https://source.unsplash.com/random/500x500"
          ></img>}
        </div>
        <div className={styles.content}>
          <h3
            className={`${styles.title} ${
              isLoading ? styles['animated-bg'] : ''
            } ${isLoading ? styles['animated-bg-text'] : ''}`}
          >
            {isLoading ? '' : 'Lorem ipsum dolor sit amet.'}
          </h3>
          <p className={styles.excerpt}>
            {isLoading ? '':'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, ipsam.'}
            {isLoading ? (
              <React.Fragment>
                <span
                  className={`${isLoading ? styles['animated-bg'] : ''} ${
                    isLoading ? styles['animated-bg-text'] : ''
                  }`}
                >
                  &nbsp;
                </span>
                <span
                  className={`${isLoading ? styles['animated-bg'] : ''} ${
                    isLoading ? styles['animated-bg-text'] : ''
                  }`}
                >
                  &nbsp;
                </span>
                <span
                  className={`${isLoading ? styles['animated-bg'] : ''} ${
                    isLoading ? styles['animated-bg-text'] : ''
                  }`}
                >
                  &nbsp;
                </span>
              </React.Fragment>
            ) : (
              ''
            )}
          </p>
          <div className={styles.author}>
            <div
              className={`${isLoading ? styles['animated-bg'] : ''} ${
                styles['profile-img']
              }`}
            >
              {isLoading ? '' : <img
                src="https://randomuser.me/api/portraits/men/67.jpg"
                alt="user"
              />}
            </div>
            <div className={styles['author-info']}>
              <strong
                className={`${isLoading ? styles['animated-bg'] : ''} ${
                  isLoading ? styles['animated-bg-text'] : ''
                }`}
              >
                {isLoading ? '' : 'John Doe'}
              </strong>
              <small
                className={`${isLoading ? styles['animated-bg'] : ''} ${
                  isLoading ? styles['animated-bg-text'] : ''
                }`}
              >
                {isLoading ? '' : 'Oct 08, 2020'}
              </small>
            </div>
          </div>
        </div>
      </div>
      <button onClick={isLoadingHandler}>Toggle loading</button>
    </div>
  );
};

export default PlaceholderCard;
