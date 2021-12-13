import React, { useRef, useState } from 'react';

import styles from './RangeSlider.module.css';

const RangeSlider = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [sliderCoords, setSliderCoords] = useState(0);
  const [initPos, setInitPos] = useState('');
  const [initWidth, setInitWidth] = useState('');
  const [sliderLeft, setSliderLeft] = useState('');
  const [clickPoint, setClickPoint] = useState('');
  const slideRef = useRef();

  console.log(isDragging);
  const mouseDownHandler = (e) => {
    setIsDragging(true);

    const sliderLeft = e.target.getBoundingClientRect().left;
    setSliderLeft(sliderLeft);

    const point = e.pageX - e.target.getBoundingClientRect().left;
    console.log(point);
    setClickPoint(point);
  };

  const mouseUpHandler = () => {
    setIsDragging(false);
  };

  const dragHandler = (e) => {
    if (isDragging) {
      console.log('Dragging mouse');
      const movePoint = e.pageX - e.target.getBoundingClientRect().left;

      if (clickPoint < movePoint) {
        if (sliderCoords >= 100) {
          return;
        }
        setSliderCoords((prev) => prev + 1);
      } else {
        if (sliderCoords <= 0) {
          return;
        }
        setSliderCoords((prev) => prev - 1);
      }
    }
  };
  const [rangeVal, setRangeVal] = useState(0);
  const rangeHandler = (e) => {
    setRangeVal(e.target.value);
  };

  return (
    <div className={styles['range-container']}>
      <div ref={slideRef} className={styles.slide}>
        <div
          className={styles.slider}
          onMouseDown={mouseDownHandler}
          onMouseUp={mouseUpHandler}
          onMouseMove={dragHandler}
          onMouseLeave={mouseUpHandler}
          style={{ left: `${sliderCoords}%`, '--pos': `'${sliderCoords}''` }}
        ></div>
        {sliderCoords === 100 && <span>MAX</span>}
        <br />
        <label htmlFor="range">
          {rangeVal}{' '}
          <input
            onChange={rangeHandler}
            id="range"
            type="range"
            min="0"
            max="100"
          ></input>
        </label>
      </div>
    </div>
  );
};

export default RangeSlider;
