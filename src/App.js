import './App.css';
import Header from './Header/Header';
import Form from './Form/Form';
import TodoList from './TodoList/TodoList';

const todos = [
  {
    title: 'poradi malo na toj aplikaciji',
    id: 1234568791321,
    completed: false
  },
  {
    title: 'Sagledaj taj film konačno',
    id: 79841313565,
    completed: true
  },
  {
    title: 'Odmori malo',
    id: 96395214647962,
    completed: false
  },
]

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
