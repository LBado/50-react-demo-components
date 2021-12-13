import React, { useCallback, useEffect, useMemo, useState } from 'react';
import useFetch from '../../hooks/useFetch';

import styles from './DadJokes.module.css';

const DadJokes = () => {
  const [joke, setJoke] = useState('');

  const { error, isLoading, sendRequest } = useFetch();

  const config = useMemo(() => ({
    url: 'https://icanhazdadjoke.com',
    headers: {
      Accept: 'application/json',
    },
  }),[]);

  const handleJoke = (apiObj) => {
    setJoke({ id: apiObj.id, joke: apiObj.joke });
    console.log(apiObj);
  };

  const fetchJokeHandler = useCallback(() => {
    sendRequest(config, handleJoke);
  },[config, sendRequest]);

  useEffect(() => {
    fetchJokeHandler(config, setJoke);
    console.log('useEffect- fetched joke');
  }, [config, fetchJokeHandler]);

  return (
    <div className={styles.dJContainer}>
      <h2>DAD JOKE EMPORIUM</h2>
      <p>{joke.joke}</p>
      <button onClick={fetchJokeHandler}>GET ANOTHER ONE!</button>
    </div>
  );
};

export default DadJokes;
