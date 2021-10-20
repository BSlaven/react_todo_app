import React from 'react';
import classes from './TodoItem.module.css';

const TodoItem = ({ todo }) => {

  const completeClickHandler = () => {
    console.log(todo.id);
    // completeTodo(todo.id)
  }

  const removeClickHandler = () => {
    console.log(todo.id);
    // removeTodo(todo.id)
  }
  
  return (
    <div className={classes.todoItem}>
      <p>{todo.title}</p>
      <div className={classes.controlsContainer}>
        <button 
          onClick={completeClickHandler}
          className={classes.completeBtn}>
          <i className="fas fa-check"></i>
        </button>
        <button 
          className={classes.deleteBtn} 
          onClick={removeClickHandler}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  )
}

export default TodoItem;