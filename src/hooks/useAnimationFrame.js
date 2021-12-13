import { useEffect, useRef } from 'react';

const useAnimationFrame = (callback, isRunning) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    console.log('starting useEffect');
    let frameCount = 0;
    let animId;

    if (isRunning) {
    const render = () => {
      frameCount++;
      savedCallback.current(frameCount);
      animId = requestAnimationFrame(render);
    };
      render();
      
      
      return () => {
        window.cancelAnimationFrame(animId);
        console.log('canceling animation...');
      };
    }
  }, [isRunning]);
};

export default useAnimationFrame;

//funkcija ki jo passamo kot callback dobi parameter frameCount
// const animateGradient = (frameCount) => {
//   const value = (
//     0.5 *
//     (1 + Math.sin(2 * Math.PI * 0.01 * frameCount)) *
//     100
//   ).toFixed(0);
//   setGradientPos(value);
// };

// useAnimationFrame(animateGradient);
