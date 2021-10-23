import React, { useState, useEffect } from 'react';
import classes from './Form.module.css';

const Form = () => {

  const [ todoInputValue, setTodoInputValue ] = useState('');

  // useEffect(() => {
  //   console.log(todoInputValue);
  // }, [todoInputValue])

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
  
  const handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem('todos', JSON.stringify(todoInputValue));
    setTodoInputValue('');
    console.log(`Form submitted with value: ${todoInputValue}`);
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