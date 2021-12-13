import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import styles from './DragNDropTasks.module.css';

const _FINISHED_TASKS = [
  {
    taskId: 't1',
    title: 'Wash the dog',
    text: 'Wash him with new shampoo',
    imgSrc: 'https://source.unsplash.com/random/150x150',
  },
];

const _TODO_TASKS = [
  {
    taskId: 't3',
    title: 'Clean room',
    text: 'Dont dust with closed windows',
    imgSrc: 'https://source.unsplash.com/random/150x150',
  },
  {
    taskId: 't4',
    title: 'Visit grandma',
    text: 'Bring her doughnuts',
    imgSrc: 'https://source.unsplash.com/random/150x150',
  },
  {
    taskId: 't2',
    title: 'Buy new sponge',
    text: 'Buy the smaller ones',
    imgSrc: 'https://source.unsplash.com/random/150x150',
  },
];

const DropElement = ({ children, setIsDragging, isDragging, setTask }) => {
  const [isDragEnter, setIsDragEnter] = useState(false);

  const onDragOverHandler = (event) => {
    //prevent default to allow drop
    event.preventDefault();
  };

  const onDragEnterHandler = (event) => {
    setIsDragEnter(true);
  };

  const onDragLeaveHandler = () => {
    setIsDragEnter(false);
  };

  const onDropHandler = (location) => {
    //dobimo id
    //poiščemo id
    // if (obj.list === 'todo') {

    // }
    console.log('Dropped');
    if (!isDragging) {
      return;
    }
    setTask();
    setIsDragging(false);
  };

  return (
    <div
      className={styles.dropEl}
      onDragOver={onDragOverHandler}
      onDrop={onDropHandler}
      onDragEnter={onDragEnterHandler}
      onDragLeave={onDragLeaveHandler}
    >
      {children}
    </div>
  );
};

const DragElement = ({
  children,
  setIsDragging,
  onSetRef,
  id,
  list,
  setIndex,
  index,
}) => {
  const onDragStartHandler = () => {
    console.log('onDragStartHandler LOG');
    setIsDragging(true);
    onSetRef({ list: list, id: id });
  };

  const onDragEndHandler = () => {
    console.log('onDragEndHandler LOG');
    setIsDragging(false);
  };

  const onDragEnterHandler = () => {
    setIndex(index);
  };

  const onDragLeaveHandler = () => {
    // setIndex(''); //doda na zadnje mesto če ni
  };

  return (
    <div
      onDragStart={onDragStartHandler}
      onDragEnd={onDragEndHandler}
      onDragEnter={onDragEnterHandler}
      onDragLeave={onDragLeaveHandler}
      draggable="true"
    >
      {children}
    </div>
  );
};

const DragNDropTasks = () => {
  const [todoTasks, setTodoTasks] = useState([..._TODO_TASKS]);
  const [finishedTasks, setFinishedTasks] = useState([..._FINISHED_TASKS]);
  const [isDragging, setIsDragging] = useState(false);
  const [isAtIndex, setIsAtIndex] = useState('');
  console.log(isAtIndex);

  const isDraggingHandler = (value) => {
    setIsDragging(value);
    console.log(isDragging);
  };
  const task = useRef();

  const setRefHandler = (obj) => {
    if (obj.list === 'todo') {
      task.current = {
        location: obj.list,
        task: todoTasks.find((item) => item.taskId === obj.id),
      };
      console.log(task.current.task);
      return;
    }
    if (obj.list === 'finished') {
      task.current = {
        location: obj.list,
        task: finishedTasks.find((item) => item.taskId === obj.id),
      };
      console.log(task.current.task);
      return;
    }
  };

  const setIndexHandler = (index) => {
    setIsAtIndex(index);
  };
  //tasks v state
  //state renderamo
  //vsak element v stateu wrappamo v dragTarget
  //drop element je celoten finished/todo
  //on drop removamo v current state in damo v sosednji state

  const setTasksHandler = (location) => {
    const taskItem = task.current;
    const index = isAtIndex;

    if (
      (location === 'todo' && taskItem.location === 'todo') ||
      (location === 'finished' && taskItem.location === 'finished')
    ) {
      console.log('Dropping in same LIST');
      return;
    }

    if (location === 'todo' && taskItem.location === 'finished') {
      setTodoTasks((prev) => {
        const arr = [...prev];
        arr.splice(index, 0, taskItem.task);
        console.log(arr);
        return arr;
      });
      setFinishedTasks((prev) => {
        const filteredArr = [...prev].filter(
          (item) => item.taskId !== taskItem.task.taskId
        );
        console.log(taskItem);
        console.log(filteredArr);
        return filteredArr;
      });
    } else {
      setFinishedTasks((prev) => {
        const arr = [...prev];
        arr.splice(index, 0, taskItem.task);
        console.log(arr);
        return arr;
        // [...prev, taskItem.task];
      });
      setTodoTasks((prev) => {
        const filteredArr = [...prev].filter(
          (item) => item.taskId !== taskItem.task.taskId
        );
        console.log(taskItem);
        console.log(filteredArr);
        return filteredArr;
      });
    }
  };

  return (
    <div className={styles.dDTcontainer}>
      <DropElement
        setTask={setTasksHandler.bind(null, 'todo')}
        isDragging={isDragging}
        setIsDragging={isDraggingHandler}
      >
        {todoTasks.map((item, index) => (
          <DragElement
            list={'todo'}
            onSetRef={setRefHandler}
            id={item.taskId}
            key={item.taskId}
            setIsDragging={isDraggingHandler}
            index={index}
            setIndex={setIndexHandler}
          >
            <div className={styles.task}>
              <img alt="task" src={item.imgSrc} />
              <h3>{item.title}</h3>
              <hr />
              <p>{item.text}</p>
            </div>
          </DragElement>
        ))}
      </DropElement>
      <DropElement
        setTask={setTasksHandler.bind(null, 'finished')}
        isDragging={isDragging}
        setIsDragging={isDraggingHandler}
      >
        {finishedTasks.map((item, index) => (
          <DragElement
            list={'finished'}
            onSetRef={setRefHandler}
            id={item.taskId}
            key={item.taskId}
            setIsDragging={isDraggingHandler}
            index={index}
            setIndex={setIndexHandler}
          >
            <div className={styles.task}>
              <img alt="task" src={item.imgSrc} />
              <h3>{item.title}</h3>
              <hr />
              <p>{item.text}</p>
            </div>
          </DragElement>
        ))}
      </DropElement>
    </div>
  );
};

export default DragNDropTasks;
