import { useState, useEffect } from 'react';
import './App.css';
import { Form } from './components/Form';
import { TodoList } from './components/TodoList';

function App() {
  const [todo, setToDo] = useState("");
  const [todosList, setToDosList] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const handleFilter = () => {
    switch(status) {
      case "completed":
        setFilteredTodos(todosList.filter(todo =>  todo.completed === true))
        break;
      case "incomplete":
        setFilteredTodos(todosList.filter(todo =>  todo.completed === false))
        break;
      default:
        setFilteredTodos(todosList);
        break;
    }
  }
  //use effect run once when app starts
  useEffect(() => {
    getLocalTodos();
  }, [])


  //use effect, every time todoList state changes, run this
  useEffect(() => {
    handleFilter();
    saveLocalTodos();
  }, [todosList, status])

  //save to locale
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todosList));
  }
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.getItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setToDosList(todoLocal);
    }
  }

  return (
    <div className="App">
      <div>
        <h1>Todos App</h1>
        <Form 
          setToDo={setToDo}
          setToDosList={setToDosList}
          todosList={todosList}
          todo={todo}
          setStatus={setStatus}
        />
        <TodoList 
          todosList={todosList}
          setToDosList={setToDosList}
          todo={todo}
          setToDo={setToDo}
          setFilteredTodos={setFilteredTodos}
          filteredTodos={filteredTodos}
          status={status}
        />
      </div>
    </div>
  );
}

export default App;
