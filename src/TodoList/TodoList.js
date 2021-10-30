import React from 'react';
import classes from './TodoList.module.css';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ todos, fetchTodos }) => {
  
  const displayTodos = (
    <div>
      {todos.map(todo => (
        <TodoItem 
        alterTodos={fetchTodos}
        todos={todos}
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