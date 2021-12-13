import React from 'react';

import styles from './Content.module.css';

const Content = (props) => {
  return (
    <div
      className={`${styles.sNContent} ${props.isHidden ? styles.showNav : ''}`}
    >
      {props.tab === 0 ? (
        <div>
          <h3>WELCOME</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
            excepturi facilis culpa distinctio eaque dicta numquam illo enim.
            Modi, minima! Lorem ipsum dolor sit amet.
          </p>
        </div>
      ) : (
        ''
      )}
      {props.tab === 1 ? (
        <div>
          <h3>ABOUT</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem a sit
            adipisci nemo consequatur, soluta doloribus nam in ut odit aut sed
            sunt iste! Doloremque assumenda, voluptate rerum libero hic maiores
            esse cumque dolorem fugit commodi aliquam nihil consequuntur ex!
          </p>
        </div>
      ) : (
        ''
      )}
      {props.tab === 2 ? (
        <div className={styles.form}>
          <h3>Contact</h3>
          <label htmlFor="eMessage" placeholder="Your eMail"></label>
          <textarea id="eMessage" rows="5" cols="33" defaultValue={'Send your message here...'}>
          </textarea>
          <button>SEND</button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Content;
