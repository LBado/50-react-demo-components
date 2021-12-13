import React, { useCallback, useEffect, useMemo, useState } from 'react';
import RightSlider from './RightSlider';

import styles from './VerticalSlider.module.css';

const VerticalSlider = () => {
  const [leftPos, setLeftPos] = useState(150);
  const [rightPos, setRightPos] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const imgUrl = useMemo(
    () => [
      'https://images.unsplash.com/photo-1629770547093-dc6cc6c653df?&w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1629648468144-5e9403a0916d?&w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1630961248314-a41268b39706?&w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1629153974080-3cd94b567ab1?&w=500&h=500&fit=crop',
    ],
    []
  );

  const slideLenght = 4;

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const slideReset = () => {
    setActiveSlide(0);
    setLeftPos(300);
    setRightPos(0);
  };

  const slideDownHandler = () => {
    if (activeSlide === slideLenght - 1) {
      console.log(activeSlide);
      setActiveSlide(0);
      setLeftPos(300);
      setRightPos(0);
      return;
    }
    console.log(activeSlide);
    setActiveSlide((prev) => prev + 1);
    setLeftPos((prev) => prev - 50);
    setRightPos((prev) => prev + 50);
  };

  const slideUpHandler = () => {
    if (activeSlide === 0) {
      console.log(activeSlide);
      setActiveSlide(3);
      setLeftPos(0);
      setRightPos(150);
      return;
    }
    console.log(activeSlide);
    setActiveSlide((prev) => prev - 1);
    setLeftPos((prev) => prev + 50);
    setRightPos((prev) => prev - 50);
  };

  return (
    <div className={styles.vSContainer}>
      <div
        style={{
          '--leftSlidePos': `-${leftPos}vh`,
        }}
        className={styles.left}
      >
        {[...Array(4)].map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: `${getRandomColor()}`,
            }}
          >
            <h1>Background {index}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur maxime soluta quis! Magnam doloribus velit tenetur
              odio maiores aperiam hic.
            </p>
          </div>
        ))}
      </div>
      <div
        style={{
          '--rightSlidePos': `-${rightPos}vh`,
        }}
        className={styles.right}
      >
        {[...Array(4)].map((item, index) => (
          <div
            key={Math.random() * index}
            style={{
              backgroundImage: `url(${imgUrl[index]})`,
            }}
          ></div>
        ))}
      </div>
      <div className={styles.actions}>
        <button onClick={slideDownHandler} className={styles.down}>
          &#709;
        </button>
        <button onClick={slideUpHandler} className={styles.up}>
          &#708;
        </button>
      </div>
    </div>
  );
};

export default VerticalSlider;
