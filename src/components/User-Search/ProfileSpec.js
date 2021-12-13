import React, { useEffect, useState } from 'react';

import styles from './ProfileSpec.module.css';

const ProfileSpec = ({ coords, user }) => {
  console.log('Rendering Profile Spec');
  console.log(user);
  const [userProfile, setUserProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log('Runninng useEffect');
    console.log(document.body.clientHeight);
    console.log(document.body.clientWidth);
  }, []);

  return (
    <div
      style={{
        top: `${coords.top - 55}px`,
        left: `${coords.left + 80}px`,
      }}
      className={styles['profile-window']}
    >
      <img alt='profile' src={user.picture.large}/>
      <h3>{user.name.first} {user.name.last}</h3>
      <small>{user.location.city}, {user.location.country}</small>
      <p>Email: <span className={styles.details}>{user.email}</span></p>
      <p>Phone: <span className={styles.details}>{user.phone}</span></p>
      <p>Cellphone: {user.cell ? <span className={styles.details}>{user.cell}</span> : 'not available'}</p>
    </div>
  );
};

export default ProfileSpec;
