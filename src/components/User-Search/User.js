import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import ProfileSpec from './ProfileSpec';

import styles from './User.module.css';

const User = ({ img, fName, lName, city, country, notFound, uuid, onShowUserModal, onHideUserModal }) => {
  
  const mouseEnterHandler = (e) => {
    const left = +e.target.getBoundingClientRect().left;
    const top = +e.target.getBoundingClientRect().top;
    const coords = { left: left, top: top };
    console.log(coords);

    onShowUserModal(coords, uuid);
    console.log('You entered name: ' + fName);
  };

  const mouseLeaveEvent = () => {
    onHideUserModal();
    console.log('You have left: ' + fName);
  };

  let render;
  render = (
    <li className={styles.user}>
      <img
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveEvent}
        alt="userPic"
        src={img}
      ></img>
      <div className={styles['user-info']}>
        <h4>
          {fName} {lName}
        </h4>
        <p>
          {city}, {country}
        </p>
      </div>
    </li>
  );

  if (notFound) {
    render = (
      <li className={styles.user}>
        <small>{notFound}</small>
      </li>
    );
  }

  return (
    <Fragment>
      {render}
    </Fragment>
  );
};

export default User;
