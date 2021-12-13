import React, { useState } from 'react';
import Note from './Note';

import styles from './NotesApp.module.css';

const NotesApp = () => {
  const [draggedId, setDraggedId] = useState('');
  const [notes, setNotes] = useState([
    {
      id: (Math.random() * 1000).toFixed(6),
      text: 'This is a kickass NOTE!',
      pos: {
        left: 10,
        top: 10,
      },
    },
  ]);

  const addNoteHandler = () => {
    if (!notes) {
      setNotes([
        {
          id: (Math.random() * 1000).toFixed(3),
          text: '',
          pos: {
            left: Math.random() * 15,
            top: Math.random() * 15,
          },
        },
      ]);
      return;
    }

    setNotes((prev) => [
      ...prev,
      {
        id: (Math.random() * 1000).toFixed(3),
        text: '',
        pos: {
          left: Math.random() * 15,
          top: Math.random() * 15,
        },
      },
    ]);
  };

  const removeNoteHandler = (id) => {
    console.log(id);
    setNotes((prev) => {
      const arr = [...prev];
      const newArr = arr.filter((item) => item.id !== id);
      console.log(newArr);
      return newArr;
    });
  };

  const updateNoteHandler = (id, noteText) => {
    setNotes((prev) => {
      const arr = [...prev];
      const index = arr.findIndex((item) => item.id === id);
      arr[index].text = noteText;
      console.log(arr[index]);
      return arr;
    });
  };

  const onDragOverHandler = (event) => {
    //prevent default to allow drop
    event.preventDefault();
  };

  const onDragEnterHandler = () => {};

  const onDragLeaveHandler = () => {};

  const onDropHandler = (e) => {
    const element = e.target.getBoundingClientRect();
    console.log('Dropped');
    console.log(e.pageX - element.x)
    setNotes((prev) => {
      const arr = [...prev];
      const index = arr.findIndex((item) => item.id === draggedId);
      arr[index].pos = { left: e.pageX - element.x, top: e.pageY - element.y };
      console.log(arr[index]);
      return arr;
    });
  };

  const setDraggedIdHandler = (id) => {
    setDraggedId(id);
  };

  return (
    <div
      onDragOver={onDragOverHandler}
      onDrop={onDropHandler}
      onDragEnter={onDragEnterHandler}
      onDragLeave={onDragLeaveHandler}
      className={styles.nAContainer}
    >
      <button className={styles.add} onClick={addNoteHandler}>
        &#128932; Add Note
      </button>
      {notes &&
        notes.map((item, index) => (
          <Note
            key={index}
            onRemoveNote={removeNoteHandler}
            onUpdateNote={updateNoteHandler}
            onSetDrag={setDraggedIdHandler}
            id={item.id}
            pos={item.pos}
            text={item.text}
          />
        ))}
    </div>
  );
};

export default NotesApp;
