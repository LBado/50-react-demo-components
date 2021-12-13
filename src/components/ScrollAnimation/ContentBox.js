import React, { useEffect, useRef, useState } from 'react';

import styles from './ContentBox.module.css';

const ContentBox = ({ id, scrollPosition }) => {
  const contentBox = useRef();
  const [boxData, setBoxData] = useState({});

  useEffect(() => {
    const boxId = id;
    const containerTop =
      contentBox.current.parentElement.getBoundingClientRect().top;
    const containerHeight =
      contentBox.current.parentElement.getBoundingClientRect().height;
    const contentBoxInitialTop = contentBox.current.getBoundingClientRect().top;
    const contentBoxTopInside =
      contentBox.current.getBoundingClientRect().top -
      contentBox.current.parentElement.getBoundingClientRect().top;
    const contentBoxInitialBottom =
      contentBoxInitialTop + contentBox.current.getBoundingClientRect().height;
    const contentBoxBottomInside =
      contentBoxTopInside + contentBox.current.getBoundingClientRect().height;

    const boxDataObj = {
      contentBoxId: boxId,
      containerTop: containerTop,
      containerHeight: containerHeight,
      contentBoxInitialTop: contentBoxInitialTop,
      contentBoxInsideTop: contentBoxTopInside,
      contentBoxInitialBottom: contentBoxInitialBottom,
      contentBoxInsideBottom: contentBoxBottomInside,
    };
    setBoxData(boxDataObj);

    console.log(boxDataObj);
    console.log('----');
  }, [id]);

  return (
    <div
      ref={contentBox}
      id={id}
      // className={`${styles.contentBox}  ${
      //   props.pos === null || props.pos.pos > props.pos.target
      //     ? ''
      //     : styles.show
      // }`}
      className={`${styles.contentBox} ${
        id % 2 === 0 ? styles.cbRight : styles.cbLeft
      } ${
        boxData.contentBoxInsideBottom - scrollPosition >
        boxData.containerHeight
          ? ''
          : styles.show
      }`}
    >
      <h2>Content Box{id}</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  );
};

export default ContentBox;
