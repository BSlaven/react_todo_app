import React from 'react';
import classes from './TodoList.module.css';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ todos }) => {

  const displayTodos = (
    <div>
      {todos.map(todo => (
        <TodoItem todo={todo} className={classes.todoItem} />
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