import React from 'react';
import classes from './TodoItem.module.css';

const TodoItem = ({ todo, todos, alterTodos }) => {

  const completeClickHandler = () => {
    const todosCopy = [ ...todos ];
    const selectedTodo = {...todosCopy.find(item => item.id === todo.id)};
    const selectedIndex = todosCopy.findIndex(item => item.id === todo.id);
    selectedTodo.completed = !selectedTodo.completed;
    todosCopy.splice(selectedIndex, 1, selectedTodo);
    localStorage.setItem('todos', JSON.stringify(todosCopy));
    alterTodos();
  }

  const removeClickHandler = () => {
    const filteredTodos = todos.filter(item => item.id !== todo.id);
    localStorage.setItem('todos', JSON.stringify(filteredTodos));
    alterTodos();
  }

  const completedClass = todo.completed ? classes.completedItem : null;
  
  return (
    <div 
      className={`${classes.todoItem} ${completedClass}`}>
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