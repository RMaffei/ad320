import React, { useState, useEffect } from 'react';
import './App.css';

const TaskManager = () => {
  const [tasks, setTasks] = useState(() => {
    // load tasks from local storage to save
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTaskTitle, setNewTaskTitle] = useState('');

  useEffect(() => {
    // use local storage whenever tasks state changes so tasks persist
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTaskTitle.trim() === '') return;

    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      completed: false,
    };

    setTasks(prevTasks => [...prevTasks, newTask]);
    setNewTaskTitle('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const activeTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>
      <div className="add-task">
        <input
          type="text"
          placeholder="New task"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          onKeyPress={handleKeyPress} 
        />
        <button onClick={addTask}>+</button>
      </div>
      <div className="task-lists">
        <ul className="active-tasks">
          <h2>Active Tasks</h2>
          {activeTasks.map(task => (
            <li key={task.id}>
              <span className={task.completed ? 'completed' : ''}>
                {task.title}
              </span>
              <div className="task-buttons">
                <button
                  className={task.completed ? 'undo-button' : 'complete-button'}
                  onClick={() => toggleTaskCompletion(task.id)}
                >
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button className="delete-button" onClick={() => deleteTask(task.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
        <ul className="completed-ttasks">
          <h2>Completed Tasks</h2>
          {completedTasks.map(task => (
            <li key={task.id}>
              <span className={task.completed ? 'completed' : ''}>
                {task.title}
              </span>
              <div className="task-buttons">
                <button
                  className={task.completed ? 'undo-button' : 'complete-button'}
                  onClick={() => toggleTaskCompletion(task.id)}
                >
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button className="delete-button" onClick={() => deleteTask(task.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskManager;