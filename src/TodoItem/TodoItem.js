import React from 'react';
import classes from './TodoItem.module.css';

const TodoItem = ({ todo }) => {
  return (
    <div className={classes.todoItem}>
      <p>{todo.title}</p>
      <div className={classes.controlsContainer}>
        <button className={classes.completeBtn}>
          <i className="fas fa-check"></i>
        </button>
        <button className={classes.deleteBtn}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  )
}

export default TodoItem;