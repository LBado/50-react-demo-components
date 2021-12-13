import React, { useCallback, useEffect, useRef, useState } from 'react';

import styles from './Drawing.module.css';

const Drawing = () => {
  const [size, setSize] = useState(10);
  const [color, setColor] = useState('black');

  const [isPressed, setIsPressed] = useState(false);
  const [coordX, setCoordX] = useState(undefined);
  const [coordY, setCoordY] = useState(undefined);
  const [coordX2, setCoordX2] = useState(undefined);
  const [coordY2, setCoordY2] = useState(undefined);
  
  const canvasRef = useRef();

  const drawCircle = useCallback(
    (ctx) => {
      ctx.beginPath();
      ctx.arc(coordX, coordY, size, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    },
    [size, color, coordX, coordY]
  );

  const drawRectangle = (ctx) => {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, 10, 10);
  };

  const drawLine = useCallback(
    (ctx) => {
      ctx.beginPath();
      ctx.moveTo(coordX, coordY);
      ctx.lineTo(coordX2, coordY2);
      ctx.strokeStyle = color;
      ctx.lineWidth = size * 2;
      ctx.stroke();
    },
    [color, size, coordX, coordY, coordX2, coordY2]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    drawCircle(context);
    // drawRectangle(context);
    drawLine(context);
  }, [drawCircle, drawLine]);

  const mouseDownHandler = (event) => {
    setIsPressed(true);

    const element = event.target.getBoundingClientRect();
    const offsetY = event.pageY - element.y;
    const offsetX = event.pageX - element.x;

    setCoordX(offsetX);
    setCoordY(offsetY);

    console.log(coordX, coordY);
  };

  const mouseUpHandler = () => {
    setIsPressed(false);

    setCoordX(undefined);
    setCoordY(undefined);
    setCoordX2(undefined);
    setCoordY2(undefined);

    console.log(coordX, coordY);
  };

  const setColorHandler = (event) => {
    setColor(event.target.value);
  };

  const increaseSizeHandler = () => {
    setSize((prev) => prev + 10);
  };

  const decreaseSizeHandler = () => {
    if (size === 10) {
      return;
    }
    setSize((prev) => prev - 10);
  };

  const mouseMoveHandler = (event) => {
    const element = event.target.getBoundingClientRect();
    
    if (isPressed) {
      const offsetY = event.pageY - element.y;
      const offsetX = event.pageX - element.x;
      
      setCoordX2(offsetX);
      setCoordY2(offsetY);

    }
    setCoordX(coordX2);
    setCoordY(coordY2);
  };

  const clearCanvasHandler = () => {
    console.log('clearing');
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  //treba je še originpoint spremenit

  return (
    <div className={styles.drawContainer}>
      <canvas
        onMouseMove={mouseMoveHandler}
        onMouseUp={mouseUpHandler}
        onMouseDown={mouseDownHandler}
        height="300"
        width="500"
        ref={canvasRef}
        className={styles.canvas}
      />
      <div className={styles.toolbox}>
        <button onClick={decreaseSizeHandler} className={styles.decrease}>
          -
        </button>
        <span className={styles.size}>{size}</span>
        <button onClick={increaseSizeHandler} className={styles.increase}>
          +
        </button>
        <input
          onChange={setColorHandler}
          className={styles.color}
          type="color"
        />
        <button onClick={clearCanvasHandler} className={styles.clear}>X</button>
      </div>
    </div>
  );
};

export default Drawing;
