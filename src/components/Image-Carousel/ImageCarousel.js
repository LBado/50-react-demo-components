import React, { useState } from 'react';
import useInterval from '../../hooks/useInterval';

import styles from './ImageCarousel.module.css';

const ImageCarousel = () => {
  const [carouselPos, setCarouselPos] = useState(0);
  const [delay, setDelay] = useState(3000);

  useInterval(() => {
    if (delay === 5000) {
      setDelay(3000)
    }
    if (carouselPos === -1500) {
      setCarouselPos(0);
      return;
    }
    setCarouselPos((prev) => prev - 500);
  }, delay);

  const leftClickHandler = () => {
    setDelay(5000);
    if (carouselPos === 0) {
      setCarouselPos(-1500);
      return;
    }
    setCarouselPos((prev) => prev + 500);
  };

  const rightClickHandler = () => {
    setDelay(5000);
    if (carouselPos === -1500) {
      setCarouselPos(0);
      return;
    }
    setCarouselPos((prev) => prev - 500);
  };

  return (
    <div className={styles.icCContainer}>
      <div
        style={{
          transform: `translateX(${carouselPos}px)`,
        }}
        className={styles['image-container']}
      >
        <img src="https://source.unsplash.com/random/500x501" alt="image1" />
        <img src="https://source.unsplash.com/random/500x502" alt="image2" />
        <img src="https://source.unsplash.com/random/500x503" alt="image3" />
        <img src="https://source.unsplash.com/random/500x504" alt="image4" />
      </div>
      <div className={styles.buttons}>
        <button onClick={leftClickHandler} className={styles.left}>
          Left
        </button>
        <button onClick={rightClickHandler} className={styles.right}>
          Right
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
