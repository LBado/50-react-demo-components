import React, { useEffect, useState } from 'react';

import styles from './ImgFeed.module.css';

let isInitial = true;

const ImgFeed = () => {
  const [rows, setRows] = useState(3);
  const [imgArr, setImgArr] = useState([]);

  useEffect(() => {
    const getRandomDimensions = () => {
      return `${Math.floor(Math.random() * 15 + 300)}x${Math.floor(
        Math.random() * 15 + 300
      )}`;
    };

    if (!isInitial) {
      for (let i = 0; i < 3; i++) {
        setImgArr((prev) => {
          return [
            ...prev,
            `https://source.unsplash.com/random/${getRandomDimensions()}`,
          ];
        });
      }
    }

    if (isInitial) {
      const arr = [];
      for (let i = 0; i < rows * 3; i++) {
        arr.push(`https://source.unsplash.com/random/${getRandomDimensions()}`);
      }
      console.log(arr);
      console.log(getRandomDimensions());
      setImgArr(arr);
      isInitial = false;
    }
  }, [rows]);

  return (
    <div className={styles['img-container']}>
      {imgArr.length !== 0 &&
        imgArr.map((item, index) => (
          <img key={index} alt="imgbox" src={item}></img>
        ))}
      <button onClick={() => setRows((prev) => prev + 1)}>Load more...</button>
    </div>
  );
};

export default ImgFeed;
