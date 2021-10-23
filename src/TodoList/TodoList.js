import React, { useState, useEffect } from 'react';
import classes from './TodoList.module.css';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = () => {

  // const [ todos, setTodos ] = useState([]);

  // useEffect(() => {
  //   const todosFromStorage = localStorage.getItem(JSON.parse('todos'))
  //   if(!todosFromStorage) return;
  //   setTodos(todosFromStorage);
  // }, []);

  const todos = [
    {
      title: 'poradi malo na toj aplikaciji',
      id: 1234568791321,
      completed: false
    },
    {
      title: 'Sagledaj taj film konačno',
      id: 79841313565,
      completed: true
    },
    {
      title: 'Odmori malo',
      id: 96395214647962,
      completed: false
    },
  ]
  
  const displayTodos = (
    <div>
      {todos.map(todo => (
        <TodoItem 
          todo={todo}
          key={todo.id}
          className={classes.todoItem} />
      ))}
    </div>
  )
  
  return (
    <div className={classes.todoContainer}>
      {displayTodos}
    </div>
  )
}

export default TodoList;