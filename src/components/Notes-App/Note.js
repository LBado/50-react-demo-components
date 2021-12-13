import React, { useState } from 'react';

import styles from './Note.module.css';

const Note = ({ id, pos, text, onRemoveNote, onUpdateNote, onSetDrag }) => {
  const [notePos, setNotePos] = useState(pos);
  const [noteText, setNoteText] = useState(text);
  const [isEditing, setIsEditing] = useState(true);

  console.log(pos);

  const position = {
    top: `${pos.top}px`,
    left: `${pos.left}px`,
  };

  const setEditHandler = () => {
    setIsEditing((prev) => !prev);
    onUpdateNote(id, noteText);
  };

  const removeNoteHandler = () => {
    onRemoveNote(id);
  };

  const onDragStartHandler = (e) => {
    console.log('Drag start!');
    onSetDrag(id);
  };

  const onDragEndHandler = (e) => {
    console.log('Drag end!');
  };

  return (
    <div
      style={position}
      className={`${styles.note} ${isEditing ? styles.editing : ''}`}
      onDragStart={onDragStartHandler}
      onDragEnd={onDragEndHandler}
      draggable="true"
    >
      <div className={styles.tools}>
        <button
          onClick={setEditHandler}
          className={`${styles.edit} ${isEditing ? styles.editing : ''}`}
        >
          &#x270E;
        </button>
        <button onClick={removeNoteHandler} className={styles.delete}>
          &#x2716;
        </button>
      </div>
      {!isEditing && <div className={styles.text}>{noteText}</div>}
      {isEditing && (
        <textarea
          value={noteText}
          onChange={(e) => {
            setNoteText(e.target.value);
          }}
          placeholder="Enter desired text..."
          className={styles.textarea}
        ></textarea>
      )}
    </div>
  );
};

export default Note;
