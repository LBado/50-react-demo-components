import React, { useRef, useState } from 'react';
import AnswersList from './AnswersList';
import styles from './QuizApp.module.css';
const quizData = [
  {
    question: 'Which language runs in web?',
    correct: 'd',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
  },
  {
    question: 'What does CSS stand for?',
    correct: 'b',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
  },
  {
    question: 'What does HTML stand for?',
    correct: 'a',
    a: 'Hypertext Markup Language',
    b: 'Hyperloop Mark Line',
    c: 'Hyperspeed Monetary Lists',
    d: 'Hot Mustard Lava',
  },
];

const QuizApp = () => {
  console.log('Rendering QuizApp');
  const [quizDataArr, setQuizDataArr] = useState(quizData);
  const [quizScore, setQuizScore] = useState(0);
  const [quizLevel, setQuizLevel] = useState(0);
  const [quizOver, setQuizOver] = useState(false);

  const selectedAnswerRef = useRef();
  const correctAnswerRef = useRef();

  const answerHandler = (option) => {
    selectedAnswerRef.current = option;

    console.log('Correct answer: ' + correctAnswerRef.current);
    console.log('Selected: ' + selectedAnswerRef.current);
  };

  const quiz = (
    <div className={styles['quiz-header']}>
      <h2 className={styles.question}>{quizDataArr[quizLevel].question}</h2>
      <AnswersList
        onSetAnswer={answerHandler}
        questions={quizDataArr[quizLevel]}
      />
    </div>
  );

  const clickHandler = () => {
    correctAnswerRef.current = quizDataArr[quizLevel].correct;
    
    if (selectedAnswerRef.current === correctAnswerRef.current) {
      setQuizScore(prev => prev + 1);
      console.log('Correct');
    }

    if (quizLevel + 1 === quizDataArr.length)  {
      setQuizOver(true);
      return;
    }
    setQuizLevel(prev => prev + 1);
  };

  return (
    <div className={styles['quiz-container']}>
      {!quizOver ? quiz : <h2 className={styles.result}>Your score: {quizScore}/3</h2>}
      <button
        onClick={
          !quizOver
            ? clickHandler
            : () => {
                setQuizOver(false);
                setQuizLevel(0);
                setQuizScore(0);
                selectedAnswerRef.current = '';
                correctAnswerRef.current = '';
              }
        }
      >
        {!quizOver ? 'Submit' : 'Restart'}
      </button>
    </div>
  );
};

export default QuizApp;
