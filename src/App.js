import './App.css';
import { useState, useEffect } from 'react';
import Header from './Header/Header';
import Form from './Form/Form';
import TodoList from './TodoList/TodoList';

function App() {

  const [ todos, setTodos ] = useState([]);

  useEffect(() => {
    fetchDataFromStorage();
  }, []);

  const fetchDataFromStorage = () => {
    const todosFromStorage = JSON.parse(localStorage.getItem('todos'));
    if(!todosFromStorage) return;
    setTodos(todosFromStorage);
  }
  
  return (
    <div className="App">
      <Form 
        todos={todos}
        fetchData={fetchDataFromStorage} />
      <Header />
      <TodoList
        fetchTodos={fetchDataFromStorage}
        todos={todos} />
    </div>
  );
}

export default App;