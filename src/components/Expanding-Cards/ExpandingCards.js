import React, { useState } from 'react';

import styles from './ExpandingCards.module.css';
import Panel from './Panel';

const _DATA = [
  {
    title: 'Snowy Divide',
    link: 'https://images.unsplash.com/photo-1616312821813-79119cd9af60?&w=500&h=500&fit=crop',
    id: Math.random().toFixed(6),
  },
  {
    title: 'Gritty Snowtop',
    link: 'https://images.unsplash.com/photo-1465220183275-1faa863377e3?&w=500&h=500&fit=crop',
    id: Math.random().toFixed(6),
  },
  {
    title: 'Mountain Trident',
    link: 'https://images.unsplash.com/photo-1617083934555-5fc3dc25434d?&w=500&h=500&fit=crop',
    id: Math.random().toFixed(6),
  },
  {
    title: 'Far Away',
    link: 'https://images.unsplash.com/photo-1582032224511-d6a8a1d21c0a?&w=500&h=500&fit=crop',
    id: Math.random().toFixed(6),
  },
  {
    title: 'At The Top',
    link: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?&w=500&h=500&fit=crop',
    id: Math.random().toFixed(6),
  },
  {
    title: 'Nepal Mountains',
    link: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?&w=500&h=500&fit=crop',
    id: Math.random().toFixed(6),
  },
];

const ExpandingCards = () => {
  const [isActiveId, setIsActiveId] = useState('');

  const activeHandler = (id) => {
    setIsActiveId(id);
  };

  return (
    <div className={styles.container}>
      {_DATA.map((item) => (
        <Panel
          key={item.id}
          id={item.id}
          activeId={isActiveId}
          title={item.title}
          imgLink={item.link}
          onClick={activeHandler.bind(null, item.id)}
          class={''}
        />
      ))}
      {/* <Panel
        class={'active'}
        key={'123'}
        title={_DATA[0].title}
        imgLink={_DATA[0].link}
      /> */}
    </div>
  );
};

export default ExpandingCards;
