import './App.css';
import { useState, useEffect } from 'react';
import Header from './Header/Header';
import Form from './Form/Form';
import TodoList from './TodoList/TodoList';

function App() {

  const [ todos, setTodos ] = useState([]);

  useEffect(() => {
    const todosFromStorage = JSON.parse(localStorage.getItem('todos'));
    if(!todosFromStorage) return;
    setTodos(todosFromStorage);
  }, []);

  const addNewTodo = todo => {
    const myTodos = [ ...todos ];
    myTodos.push(todo);
    localStorage.setItem('todos', JSON.stringify(myTodos));
  }
  
  return (
    <div className="App">
      <Header />
      <Form />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;