import { useCallback, useEffect, useRef } from 'react';

const useScroll = (callback) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    const scrollHandler = () => {
      savedCallback.current();
    };

    console.log('setting event listener');
    window.addEventListener('scroll', scrollHandler);
    return () => {
      console.log('removing event listener');
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);
};

export default useScroll;


// useScroll(() => {
//   setOffset(window.scrollY);
// });