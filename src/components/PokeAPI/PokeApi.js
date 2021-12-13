import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';

import styles from './PokeApi.module.css';
import Pokemon from './Pokemon';

const PokeApi = () => {
  const [pokemonArr, setPokemonArr] = useState([]);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=100');
  useEffect(() => {
    const fetchPokemonArr = async () => {
      const fetchData = await fetch(`${url}`);
      const data = await fetchData.json();
      console.log(data);
      console.log(data.results);
      setPokemonArr(data);
    };
    fetchPokemonArr();
  }, [url]);

  const nextHandler = () => {
    setUrl(pokemonArr.next);
  };
  const prevHandler = () => {
    setUrl(pokemonArr.previous);
  };

  return (
    <div className={styles.pokeContainer}>
      <div className={styles.actions}>
        <button onClick={prevHandler}>Prev</button>
        <h1 className={styles.title}>Pokedex</h1>
        <button onClick={nextHandler}>Next</button>
      </div>
      <div className={styles['poke-container']}>
        {pokemonArr.results &&
          pokemonArr.results.map((pokemon, index) => (
            <Pokemon key={index} url={pokemon.url} name={pokemon.name} />
          ))}
      </div>
    </div>
  );
};

export default PokeApi;
