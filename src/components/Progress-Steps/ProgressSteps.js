import React, { useState } from 'react';
import ContentContainer from './ContentContainer';
import Progress from './Progress';
import styles from './ProgressSteps.module.css';



const _CONTENT = [
  {
    id: Math.random().toFixed(6),
    content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, ipsa?'    
  },
  {
    id: Math.random().toFixed(6),
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae explicabo optio nisi.'    
  },
  {
    id: Math.random().toFixed(6),
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur.'    
  },
  {
    id: Math.random().toFixed(6),
    content: 'Lorem ipsum dolor sit amet.'    
  }
];


const ProgressSteps = () => {
  const maxSteps = _CONTENT.length;

  const [level, setLevel] = useState(1);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  const addStepHandler = () => {
    if (level + 1 === maxSteps) {
      setNextDisabled(true);
    } else {
      setPrevDisabled(false);
      setNextDisabled(false);
    }
    setLevel(prev => prev + 1 ); 
  };
  

  const removeStepHandler = () => {
    if (level - 1 === 1) {
      setPrevDisabled(true);
    } else {
      setNextDisabled(false);
      setPrevDisabled(false);
    }
    setLevel(prev => prev - 1 ); 
  };

  return (
    <div className={styles.container}>
      <Progress maxSteps={maxSteps} step={level} />
      <ContentContainer step={level} content={_CONTENT} maxSteps={maxSteps}/>
      <div className={styles['btn-container']}>
        <button className={styles.btn} disabled={prevDisabled} onClick={removeStepHandler}>PREV</button>
        <button className={styles.btn} disabled={nextDisabled} onClick={addStepHandler}>NEXT</button>
      </div>
    </div>
  );
};

export default ProgressSteps;
