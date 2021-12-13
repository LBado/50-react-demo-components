import React, { useEffect, useState } from 'react';
import styles from './AnswersList.module.css';
const AnswersList = ({ onSetAnswer, questions }) => {
  const [questionsArr, setQuestionsArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const arr = [];
    Object.entries(questions).forEach(([key, value], index) => {
      if (index >= 2) {
        arr.push({ [key]: value });
      }
    });
    setQuestionsArr(arr);
    setIsLoading(false);
  }, [questions]);

  return (
    <ul>
      {!isLoading &&
        questionsArr.map((item, index) => (
          <li key={index}>
            <input
              onChange={() => onSetAnswer(Object.keys(item)[0])}
              id={Object.keys(item)[0]}
              name="answer"
              type="radio"
            ></input>
            <label htmlFor={Object.keys(item)[0]}>
              {item[Object.keys(item)[0]]}
            </label>
          </li>
        ))}
    </ul>
  );
};

export default AnswersList;
