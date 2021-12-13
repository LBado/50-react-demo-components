import { useEffect, useRef } from 'react';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      console.log('Setting Interval');
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval;

//__EXAMPLE

// useInterval(()=>{
//   setCounter(counter - 1);
//   console.log(counter);
//   //izberemo random index
//   //poiščemo v stateu index in ga settamo to true
//   //true doda class
//   setStyleIndex(Math.floor(Math.random() * tagsArr.length));
//   console.log('Style index:');
//   console.log(styleIndex);
//   if (counter === 0) {
//     setIsRunning(false);
//     setCounter(0);
//     setShowRerun(true);
//   }
// }, isRunning ? delay : null);
