import React, { useState } from 'react';
import Toast from './Toast';

import styles from './ToastNotification.module.css';

const ToastNotification = () => {
  const [toastArr, setToastArr] = useState([]);
  //problem ker timeout zahteva statechange in ga mora izvesti preden se naredi
  //naslednji zato rata kolona ker vsi zahtevajo state change
  //blse bi blo z intervalom in narediti date
  const removeHandler = (id) => {
    console.log(id);
    console.log('removing id: ' + id);
    console.log(toastArr);
    setToastArr(prev => {
      const arr = [...prev];
      const newArr = arr.filter(toast => toast.id !== id);
      return newArr;
    });
  };

  const createToastHandler = () => {
    setToastArr((prev) => {
      const arr = [...prev];
      arr.push({
        message: 'This is a service announcement!',
        id: Math.floor(Math.random() * 1000),
      });
      return arr;
    });
  };

  return (
    <React.Fragment>
      <div className={styles.toasts}>
        {toastArr.map((item, index) => (
          <Toast key={index} id={item.id} onRemove={removeHandler}>
            {item.message}
          </Toast>
        ))}
      </div>
      <button className={styles.toastBtn} onClick={createToastHandler}>Show toast</button>
    </React.Fragment>
  );
};

export default ToastNotification;
