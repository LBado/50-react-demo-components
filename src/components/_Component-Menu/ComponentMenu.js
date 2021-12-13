import React, { useState } from 'react';
import styles from './ComponentMenu.module.css';

const _COMPONENTS = [
  'Expanding Cards',
  'Progress Steps',
  'Sliding Navigation',
  'Search Bar',
  'Blurry Loading',
  'Scroll Animation',
  'Split Page',
  'Form Wave',
  'Sound Board',
  'Dad Jokes',
  'Get Key Code',
  'Faq Cards',
  'Choice Picker',
  'Animated Nav',
  'Media Counter',
  'Drink Water',
  'Background Slider',
  'Theme Clock',
  'Button Ripple',
  'Drag N Drop',
  'Drawing',
  'Moving Gradient',
  'Placeholder Card',
  'Kinetic Loader',
  'Sticky Navbar',
  'Vertical Slider',
  'Toast Notification',
  'Github Profiles',
  'Like Double Click',
  'Auto Text',
  'Password Generator',
  'Checkbox Sliders',
  'Notes App',
  'Animated Countdown',
  'Image Carousel',
  'Hover Board',
  'PokeApi',
  'Mobile Tab Navigation',
  'Password Strength',
  'DBoxes',
  'Number Verification Box',
  'User Search',
  'Feedback Form',
  'Range Slider',
  'Navigation Sidebar',
  'Quiz App',
  'Testimonials',
  'Image Feed',
  'ToDo List',
];

const ComponentMenu = ({ selectionFn, selectionValue }) => {
  const [menuIsShown, setMenuIsShown] = useState(false);
  // const [selection, setSelection] = useState(1);
  const selectionHandler = (index) => {
    selectionFn(index);
    setMenuIsShown(false);
  };

  return (
    <>
      {!menuIsShown && (
        <button
          onClick={() => setMenuIsShown(true)}
          className={`${styles['side-menu-btn']} ${styles['side-menu-btn-open']}`}
        >
          &#9776;
        </button>
      )}

      <div
        className={`${styles['selection-menu']} ${menuIsShown && styles.shown}`}
      >
        <button
          onClick={() => setMenuIsShown(false)}
          className={`${styles['side-menu-btn']} ${styles['side-menu-btn-close']}`}
        >
          &#128473;
        </button>

        <h4> C O M P O N E N T :</h4>
        <hr />
        <ul>
          {_COMPONENTS.map((item, index) => (
            <label key={index} htmlFor={item}>
              <li>
                <input
                  checked={selectionValue === index ? true : false}
                  name="selection"
                  id={item}
                  type="radio"
                  onChange={() => selectionHandler(index)}
                />
                {item}
              </li>
            </label>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ComponentMenu;
