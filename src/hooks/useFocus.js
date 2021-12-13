import { useCallback, useRef } from 'react';

const useFocus = () => {
  const htmlElRef = useRef(null);
  const setFocus = useCallback(() => {
    console.log('Setting focus');
    htmlElRef.current && htmlElRef.current.focus();
  }, []);
  const setBlur = useCallback(() => {
    htmlElRef.current && htmlElRef.current.blur();
  }, []);
  return [htmlElRef, setFocus, setBlur];
};
export default useFocus;
