import React, { useState } from 'react';
import classes from './Form.module.css';

const Form = ({ todos, fetchData }) => {

  const [ todoInputValue, setTodoInputValue ] = useState('');

  const createTodoObject = title => {
    return {
      title: title,
      id: Math.floor(Math.random() * 10000000),
      completed: false
    }
  }
  
  const handleInputChange = e => {
    const enteredValue = e.target.value;
    setTodoInputValue(enteredValue);
  }

  const postDataToLocalStorage = () => {
    const copyTodos = [ ...todos ];
    const newTodo = createTodoObject(todoInputValue);
    copyTodos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(copyTodos));    
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    postDataToLocalStorage();
    fetchData();
    setTodoInputValue('');
  }
  
  return (
    <form 
      className={classes.form}
      onSubmit={handleSubmit}>
      <label htmlFor="input-todo" className={classes.todoLabel}>
        <input
          value={todoInputValue || ''}
          onChange={handleInputChange}
          type="text" 
          className={classes.todoInput} 
          id="input-todo"
          placeholder='Enter new task...' />
      </label>
      <button className={classes.formBtn}>
        Add
      </button>
    </form>
  )
}

export default Form;