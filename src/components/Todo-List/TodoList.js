import React, { useEffect, useRef, useState } from 'react';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';
let init = true;
const TodoList = () => {
  console.log('Rendering todo List');
  const [todoList, setTodoList] = useState(() => {
    if (localStorage.getItem('todoList')) {
      const arr = JSON.parse(localStorage.getItem('todoList'));
      return arr;
    }
    return [];
  });
  const inputRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value.trim();
    if (inputValue !== '')
      setTodoList((prev) => [
        ...prev,
        { id: `${Math.random() * 1000}`, value: inputValue, completed: false },
      ]);
    inputRef.current.value = '';

    const arr = JSON.parse(localStorage.getItem('todoList'));
    console.log(arr);
  };

  // const removeTodoHandler = (index) => {
  //   // setTodoList((prev) => {
  //   //   const arr = [...prev];
  //   //   arr.splice(index, 1);
  //   //   console.log(arr);
  //   //   return arr;
  //   // });
  // };

  useEffect(() => {
    if (init) {
      // if (localStorage.getItem('todoList')) {
      //   const arr = JSON.parse(localStorage.getItem('todoList'));
      //   setTodoList(arr);
      // }
      init = false;
      return;
    }
    console.log('Adding to local storage');
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  const statusHandler = (id) => {
    console.log(todoList);
    console.log('changing status');
    setTodoList((prev) => {
      const arr = [...prev];
      const itemIndex = arr.findIndex((item) => item.id === id);
      const obj = { ...arr[itemIndex] };
      console.log(obj);
      obj.completed = !obj.completed;
      console.log(obj);
      console.log('Before: ' + arr[itemIndex].completed);
      arr[itemIndex] = obj;
      console.log('After: ' + arr[itemIndex].completed);
      console.log(arr);
      return arr;
    });
  };

  return (
    <div className={styles['todo-container']}>
      <h1>todo</h1>
      <form onSubmit={formSubmitHandler} className={styles.form}>
        <input
          placeholder="Enter your todo..."
          ref={inputRef}
          type="text"
          id="todo"
        ></input>
      </form>
      <ul className={styles.todo}>
        {todoList.length !== 0 &&
          todoList.map((item, index) => (
            <TodoItem onSetStatus={statusHandler} item={item} key={index} />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
