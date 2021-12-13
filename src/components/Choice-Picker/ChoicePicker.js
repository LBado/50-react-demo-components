import React, { useEffect, useRef, useState } from 'react';
import useInterval from '../../hooks/useInterval';

import styles from './ChoicePicker.module.css';
import Tag from './Tag';

//u ref shranimo ker useEffect brez dependencies shrani samo initial verzijo state-a
//če spremenimo state in se komponenta re-rendirala bo useEffect imel še vedno referenco na state ki smo ga podali za začetku (ker ni dependenci da ob spremembi updejta values inside)
//ker uporabimo useRef imamo ob re-renderju vedno referenco na "fresh" state ker se nahaja zunaj useEffect in se "updejta" ob re-renderju


const ChoicePicker = () => {
  const [tagsArr, setTagsArr] = useState([]);
  const [textValue, setTextValue] = useState('');
  const [counter, setCounter] = useState(3);
  const [isRunning, setIsRunning] = useState(false);
  const [delay, setDelay] = useState(100);
  const [styleIndex, setStyleIndex] = useState('');
  const [showRerun, setShowRerun] = useState(false);

  const textAreaChangeHandler = (event) => {
    setTextValue(event.target.value);
    createTags(textValue);
  };

  const createTags = (input) => {
    //splitamo pri ',' če nimamo bo en velik array element
    //filtriramo in vrnemo samo tiste ki po "trimmanju" niso empty '' - cant be an empty string
    //--če je 'asdf ' po trimu 'asdf' je različen od '' in ga bo sprejel
    //--če je ' ' po trimu '' ni različen od '' in ga ne bo sprejel
    //mappamo vsak tag in ga trimmamo - 'arrEl  ' bo 'arrEl'

    const tags = input
      .split(',')
      .filter((tag) => tag.trim() !== '')
      .map((tag) => tag.trim());
    console.log(tags);
    setTagsArr(tags);
  };

  console.log('component loaded');

  const randomSelect = () => {
    setShowRerun(false);
    setCounter(tagsArr.length)
    console.log('random select');
    setIsRunning(true);
  };

  useInterval(()=>{
    setCounter(counter - 1);
    console.log(counter);
    //izberemo random index
    //poiščemo v stateu index in ga settamo to true
    //true doda class
    setStyleIndex(Math.floor(Math.random() * tagsArr.length));
    console.log('Style index:');
    console.log(styleIndex);
    if (counter === 0) {
      setIsRunning(false);
      setCounter(0);
      setShowRerun(true);
    }
  }, isRunning ? delay : null);

  const keyUpHandler = (event) => {
    if (event.key === 'Enter') {
      console.log('ENTER');
      setTextValue('');
      randomSelect();
    }
  };

  

  return (
    <div className={styles.cPContainer}>
      <h3>
        Enter all choices divided by comma (',').
        <br /> Press 'enter' when you're done
      </h3>
      <textarea
        onChange={textAreaChangeHandler}
        onKeyUp={keyUpHandler}
        className={styles.textArea}
        placeholder="Enter choices here"
        value={textValue}
      ></textarea>
      <div className={styles.tags}>
        {tagsArr.map((tag, index) => (
          <Tag styleIndex={styleIndex} content={tag} key={index} id={index} />
        ))}
      </div>
      {showRerun && <button className={styles.reRun} onClick={randomSelect}>Re-Run Choice Select</button>}
    </div>
  );
};

export default ChoicePicker;
