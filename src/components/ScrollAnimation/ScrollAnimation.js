import React, { useEffect, useRef, useState } from 'react';
import ContentBox from './ContentBox';

import styles from './ScrollAnimation.module.css';

const ScrollAnimation = () => {
  const [elPosList, setElPosList] = useState([]);
  const scrollContainer = useRef();
  const scrollContainerTop = useRef();
  const scrollContainerHeight = useRef();
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    scrollContainerHeight.current =
      scrollContainer.current.getBoundingClientRect().top +
      scrollContainer.current.getBoundingClientRect().height;
    scrollContainerTop.current = scrollContainer.current.getBoundingClientRect().top;
  }, []);

  const scrollFn = (event) => {
    const containerElement = event.target;
    const scrollTopPos = containerElement.scrollTop;
    setScrollPos(scrollTopPos);
    console.log('Scroll top Pos: ' + scrollTopPos);

    //Drugi način (old)
    // const scrollableArea = containerElement.scrollHeight - containerElement.clientHeight;

    // let scrollTarget = containerElement.getBoundingClientRect().top + (containerElement.clientHeight / 5 * 4.5);

    // if (containerElement.hasChildNodes()) {
    //   const containerNodes = containerElement.childNodes;

    //   for (let i = 0; i < containerNodes.length; i++) {
    //     const itemElement = containerNodes[i];
    //     //.getBoundingClientRect().top
    //     const itemElementTop = Math.round(itemElement.getBoundingClientRect().top);
    //     const itemElementId = itemElement.id;

    //     // topMax = itemTop > topMax

    //     setElPosList((prevItems) => {
    //       const itemArr = [...prevItems];
    //       const updatedItem = {
    //         ...itemArr[i],
    //         id: itemElementId,
    //         pos: itemElementTop,
    //         target: scrollTarget,
    //       };
    //       itemArr[i] = updatedItem;
    //       return itemArr;
    //     });
    //   }
    // }

    // console.log('Element pos List');
    // console.log(elPosList);

    // console.log('Container scrollHeight (velikost scroll contenta + padding)');
    // console.log(containerElement.scrollHeight);
    // console.log('Container scrollTop (pos od vrha)');
    // console.log(Math.round(containerElement.scrollTop));
    // console.log('Container clientHeight (content + padding)');
    // console.log(containerElement.clientHeight);
    // console.log('Container offsetHeight (content + border + padding + scrollbar)');
    // console.log(containerElement.offsetHeight);

    // console.log('Scrolable Area');
    // console.log(scrollableArea);

    // if (
    //   containerElement.scrollHeight - Math.abs(containerElement.scrollTop) ===
    //   containerElement.clientHeight
    // ) {
    //   console.log('AT BOTTOM');
    // }
  };

  //40 * i < scrollPos ? styles.show : ''
  return (
    <div ref={scrollContainer} className={styles.container} onScroll={scrollFn}>
      {[...Array(10)].map((item, i) => (
        <ContentBox
          key={i}
          // pos={typeof elPosList[i] === 'undefined' ? null : elPosList[i]}
          scrollPosition={scrollPos}
          id={i}
        />
      ))}
    </div>
  );
};

export default ScrollAnimation;
