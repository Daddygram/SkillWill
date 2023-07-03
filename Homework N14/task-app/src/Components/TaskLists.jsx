import React, { useState, useCallback, useMemo } from "react";
import Tasks from "./Tasks";

const TaskLists = () => {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([{id:1, name: 'Make Coffee'}, {id:2, name: 'Take a Walk'}]);
  const [finishedTasks, setFinishedTasks] = useState([]);

  const onChange = (event) => {
    setInputValue(event.target.value);
  }

  const addTask = (event) => {
    event.preventDefault();

    const task = {
      id: tasks.length + 1,
      name: inputValue
    };

    setTasks((prevState) => [...prevState, task]);
    setInputValue('');
  }

  const removeTask = useCallback((id, check) => {
    if (check) {
      setFinishedTasks((prevState) => prevState.filter((task) => task.id !== id));
    } else {
      setTasks((prevState) => prevState.filter((task) => task.id !== id));
    }
  }, []);

  const finishTask = useCallback((id) => {
    const finishedTaskData = tasks.find((task) => task.id === id);
    setFinishedTasks((prevState) => [...prevState, finishedTaskData]);
  }, [tasks]);

  const computedTasks = useMemo(() => {
    return tasks.map((task) => (
      <Tasks key={task.id} id={task.id} task={task.name} action1={() => finishTask(task.id)} action2={() => removeTask(task.id, false)} />
    ));
  }, [tasks, finishTask, removeTask]);

  const computedFinishedTasks = useMemo(() => {
    return finishedTasks.map((task) => (
      <Tasks key={task.id} id={task.id} task={task.name} action1={() => finishTask(task.id)} action2={() => removeTask(task.id, true)} />
    ));
  }, [finishedTasks, finishTask, removeTask]);

  return (
    <div className='taskTable'>
      <div className='toDoList'>
        <h1>To Do List</h1>
        <form onSubmit={addTask} className="task-form">
          <input type="text" onChange={onChange} value={inputValue}/>
          <button>Add Task</button>
        </form>
        {computedTasks}
      </div>
      <div className='completedTasks'>
        <h2>Completed Tasks:</h2>
        <div>
          {computedFinishedTasks}
        </div>
      </div>
    </div>
  );
};

export default TaskLists;
