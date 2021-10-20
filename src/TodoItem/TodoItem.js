import React from 'react';
import classes from './TodoItem.module.css';

const TodoItem = ({ todo }) => {
  return (
    <div className={classes.todoItem}>
      <p>{todo.title}</p>
    </div>
  )
}

export default TodoItem;