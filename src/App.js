import { useEffect, useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import getAllTodo from './services/getAllTodo';

function App() {

  const [todo, setTodo] = useState([])

  useEffect (() => {
    getAllTodo()
    .then((response) => {
      setTodo(response.data.todos)
    })
  }, [])

  const list  = todo.map((todos) => <TodoItem key={todos.id} todoObj={todos} />)
  return (
    <div className="App">
      <header className="App-header">
      {list}
      </header>
    </div>
  );
}

export default App;
