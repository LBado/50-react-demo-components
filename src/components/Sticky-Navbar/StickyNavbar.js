import React, { useCallback, useEffect, useState } from 'react';
import useScroll from '../../hooks/useScroll';

import styles from './StickyNavbar.module.css';

const StickyNavbar = () => {
  //scroll ne dela če ne removamo overflow iz index.css
  const [offset, setOffset] = useState(0);
  console.log(offset);

  // const scrollHandler = useCallback(() => {
  //   setOffset(window.scrollY);
  // }, []);

  // useEffect(() => {
  //   console.log('setting event listener');
  //   window.addEventListener('scroll', scrollHandler);
  //   return () => {
  //     console.log('removing event listener');
  //     window.removeEventListener('scroll', scrollHandler);
  //   };
  // }, [scrollHandler]);

  //če ni v container in je fixed nav
  // useScroll(() => {
  //   setOffset(window.scrollY);
  // });

  return (
    <div
      className={styles.website}
      onScroll={(e) => setOffset(e.target.scrollTop)}
    >
      <nav className={`${styles.nav} ${offset > 50 ? styles.active : ''}`}>
        <div className={styles.container}>
          <h1>
            <button>My website</button>
          </h1>
          <ul>
            <li>
              <button className={styles.active}>Home</button>
            </li>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Services</button>
            </li>
            <li>
              <button>Contact</button>
            </li>
          </ul>
        </div>
      </nav>
      <div className={styles.hero}>
        <div className={styles.container}>
          <h1>Welcome to my website</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
            expedita!
          </p>
        </div>
      </div>
      <section className={`${styles.container} ${styles.content}`}>
        <h2>Content 1</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iure,
          inventore quae, quas mollitia voluptates nisi consectetur officia
          blanditiis numquam aspernatur eius eos ut. Minima deleniti
          necessitatibus eveniet sed assumenda, excepturi error ipsum eaque
          explicabo nemo iure vitae sapiente, magnam repellendus porro ab
          facere? Perspiciatis, corrupti ea culpa rerum nisi minima repudiandae
          atque ducimus esse, repellendus harum sunt nostrum fugit voluptates
          sed soluta eligendi doloremque veniam architecto dolor facere labore
          maxime vero veritatis. Dolor cupiditate reiciendis asperiores totam
          laboriosam numquam. Consectetur enim nulla numquam provident dolore
          quidem minima labore accusamus, id sequi sit quae quisquam illum,
          expedita, illo debitis dignissimos!
        </p>

        <h3>Content 2</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          illo eaque exercitationem necessitatibus adipisci aliquid amet fuga
          repudiandae laudantium maiores sit ipsa quaerat enim ut iste vel
          error, suscipit aliquam. Provident ab omnis ad amet magni magnam
          suscipit perferendis, repellendus numquam eos reprehenderit possimus
          voluptate dolorem tenetur esse eum commodi?
        </p>
      </section>
    </div>
  );
};

export default StickyNavbar;
