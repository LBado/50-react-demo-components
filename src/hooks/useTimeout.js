import { useEffect, useRef } from 'react';

function useTimeout(callback, delay) {
  const savedCallback = useRef();
  const timeoutId = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      console.log('Setting Timeout');
      timeoutId.current = setTimeout(tick, delay);
      return () => {
        console.log('clearing timeout');
        clearTimeout(timeoutId.current);
      };
    }
  }, [delay]);
}

export default useTimeout;
