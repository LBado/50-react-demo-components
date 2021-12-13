import React, { useEffect, useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import styles from './Pokemon.module.css';
const Pokemon = ({ url, name }) => {
  const [pokemon, setPokemon] = useState(null);
  console.log(url);
  console.log(name);
  useEffect(() => {
    const fetchPokemon = async () => {
      const responseData = await fetch(`${url}`);
      const data = await responseData.json();
      setPokemon(data);
    };

    fetchPokemon();
  }, [url]);

  const getPokemonStyle = () => {
    switch (pokemon.types[0].type.name) {
      case 'grass':
        return 'lightgreen';
      case 'fire':
        return 'lightcoral';
      case 'water':
        return 'lightblue';
      case 'bug':
        return 'lightgrey';
      case 'rock':
        return 'burlywood';
      case 'normal':
        return 'white';
      case 'poison':
        return 'rebeccapurple';
      case 'fairy':
        return 'lightpink';
      case 'electric':
        return 'lightyellow';
      case 'fighting':
        return 'blanchedalmond';
      case 'ground':
        return 'khaki';
      case 'psychic':
        return 'mediumorchid';
      case 'ghost':
        return 'ghostwhite';
      default:
        return 'white';
    }
  };

  return (
    <Fragment>
      {pokemon && (
        <div
          className={styles.pokemon}
          style={{
            backgroundColor: getPokemonStyle(),
          }}
        >
          <div className={styles['img-container']}>
            <img
              src={`${pokemon.sprites.front_default}`}
              alt={`${pokemon.name}`}
            />
          </div>
          <div className={styles.info}>
            <span className={styles.number}>{`#${pokemon.order}`}</span>
            <h3 className={styles.name}>{`${pokemon.name}`}</h3>
            <small className={styles.type}>
              Type:{' '}
              {pokemon.types.map((type, index) => (
                <span key={index}>
                  {type.type.name}
                  {index >= 0 && index < pokemon.types.length - 1 ? ',' : ''}
                </span>
              ))}
            </small>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Pokemon;
