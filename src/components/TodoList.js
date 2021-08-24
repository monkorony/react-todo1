import React from 'react';
import { Todo } from './Todo';

export const TodoList = ({ 
  todosList, 
  setToDosList,
  todo,
  setFilteredTodos,
  filteredTodos,
  status
}) => {

  
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <Todo 
            key={todo.id}
            itemId={todo.id}
            text={todo.text}
            setToDosList={setToDosList}
            todosList={todosList}
            todo={todo}
          />
          
        ))}
      </ul>
    </div>
  )
}
