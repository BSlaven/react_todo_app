import React from 'react';
import classes from './TodoItem.module.css';

const TodoItem = ({ todo }) => {
  return (
    <div className={classes.todoItem}>
      <p>{todo.title}</p>
      {/* <div className="controlsContainer"> */}
        <button className={classes.completeBtn}>+</button>
        <button className={classes.deleteBtn}>/-</button>
      {/* </div> */}
    </div>
  )
}

export default TodoItem;