import React, { useRef, useState } from 'react';

import styles from './GithubProfiles.module.css';

const usersUrl = 'https://api.github.com/users/';

const GithubProfiles = () => {
  const inputRef = useRef();
  const [user, setUser] = useState('');
  const [userRepos, setUserRepos] = useState('');
  const [opacity, setOpacity] = useState(0);
  const [notFound, setNotFound] = useState(false);

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setNotFound(false);
    const username = inputRef.current.value;

    const res = await fetch(`${usersUrl}${username}`);
    const data = await res.json();
    if (data.message === 'Not Found') {
      console.log('User not Found');
      setNotFound(true);
      return;
    } 
    const resRepos = await fetch(`${usersUrl}${username}/repos`);
    const dataRepos = await resRepos.json();
    console.log(data);
    console.log(dataRepos);
    setUserRepos(dataRepos);
    setUser(data);
    setOpacity(1);
  };

  return (
    <div className={styles.gPContainer}>
      <form onSubmit={formSubmitHandler} className={styles.form}>
        <label htmlFor="input">
          Find <strong>GitHub</strong> profile!
        </label>
        <input
          ref={inputRef}
          type="text"
          className={styles.input}
          placeholder="&#128269; Enter username..."
        ></input>
      </form>
      <main className={styles.main}>
        {notFound && <div className={styles.notFound}>
          <h2>User Not Found!</h2>
          <small>...try searching without underscores/spaces and special characters.</small>
        </div>}
        <div
          style={user ? { opacity: `${opacity}` } : null}
          className={styles.card}
        >
          <div>
            <img className={styles.img} alt="user" src={user.avatar_url}></img>
          </div>
          <div className={styles.user}>
            <h2>{user.login}</h2>
            <p>{user.bio}</p>
            <ul>
              <li>
                {user.followers} <strong>Followers</strong>
              </li>
              <li>
                {user.following} <strong>Following</strong>
              </li>
              <li>
                {user.public_repos} <strong>Repos</strong>
              </li>
            </ul>
            <div className={styles.repos}>
              {user &&
                userRepos.map((item, index) => {
                  if (index < 5) {
                    return <button key={item.id}>{item.name}</button>;
                  }
                  return null;
                })}
                {userRepos.length > 5 ? <button>...</button> : ''}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GithubProfiles;
