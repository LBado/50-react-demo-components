import React, { useEffect, useState } from 'react';
import ProfileSpec from './ProfileSpec';
import User from './User';

import styles from './UserSearch.module.css';

// const blank = {
//   message: 'User not Found',
//   login: {
//     uuid: 'not_found_key',
//   },
//   picture: { thumbnail: undefined },
//   name: { first: undefined, last: undefined },
//   location: { city: undefined, country: undefined },
// };

const UserSearch = () => {
  const [userArr, setUserArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredArr, setFilteredArr] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [seed, setSeed] = useState('');
  const [userProfile, setUserProfile] = useState(null);
  const [coords, setCoords] = useState({});
   
  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      const response = await fetch('https://randomuser.me/api/?results=50');
      const data = await response.json();
      console.log(data.results);
      console.log(data);
      setUserArr(data.results);
      setSeed(data.info.seed);
      setIsLoading(false);
    };

    fetchUsers();
  }, []);

  const searchHandler = (e) => {
    setInputVal(e.target.value);
    const val = e.target.value.toUpperCase();
    console.log(val);
    const arr = userArr.filter(
      (user) =>
        user.name.first.toUpperCase().includes(val) ||
        user.name.last.toUpperCase().includes(val) ||
        user.location.city.toUpperCase().includes(val) ||
        user.location.country.toUpperCase().includes(val) === true
    );
    setFilteredArr(arr);
  };

  let userDataArr =
    filteredArr.length !== 0
      ? filteredArr
      : filteredArr.length === 0 && inputVal.length > 0
      ? [{
        message: `No users found for query: ${inputVal}`,
        login: {
          uuid: 'not_found_key',
        },
        picture: { thumbnail: undefined },
        name: { first: undefined, last: undefined },
        location: { city: undefined, country: undefined },
      }]
      : userArr;

  //onMouseOver display box - pos:fixed?
  //https://randomuser.me/api/?seed=02dd54a77bec4b40&id=57296894-K

  const showUserModalHandler = (coords, uuid) => {
    const user = userArr.find((user) => user.login.uuid === uuid);
    setCoords(coords);
    setUserProfile(user);
  };

  const hideUserModalHandler = () => {
    setUserProfile(null);
  };

  return (
    <div className={styles['search-container']}>
      <div className={styles.search}>
        <h3>Search Users using live filter</h3>
        <label htmlFor="search">Search by name and/by location</label>
        <input
          onChange={searchHandler}
          id="search"
          placeholder="Search"
          value={inputVal}
        ></input>
      </div>
      <div className={styles.users}>
        <ul className={styles['user-list']}>
          {isLoading && <li>Loading...</li>}
          {userDataArr.map((user, index) => (
            <User
              uuid={user.login.uuid}
              onHideUserModal={hideUserModalHandler}
              onShowUserModal={showUserModalHandler}
              notFound={user.message}
              key={user.login.uuid}
              img={user.picture.thumbnail}
              fName={user.name.first}
              lName={user.name.last}
              city={user.location.city}
              country={user.location.country}
            />
          ))}
        </ul>
      </div>
      {userProfile && <ProfileSpec user={userProfile} coords={coords} />}
    </div>
  );
};

export default UserSearch;
