import React from 'react';
import classes from './Form.module.css';

const Form = () => {
  return (
    <form className={classes.form}>
      <label htmlFor="input-todo" className={classes.todoLabel}>
        <input 
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