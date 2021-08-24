import React from 'react'

export const Form = ({
  setToDo, 
  setToDosList,
  todosList,
  todo,
  setStatus
}) => {

  const handleInput = (evt) => {
    setToDo(evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setToDosList([...todosList, 
      { text: todo, 
        completed: false, 
        id: Math.floor(Math.random() * 100)
      }
    ]);
    setToDo("");
  }
  const handleStatus = (evt) => {
    console.log(evt.target.value);
    setStatus(evt.target.value);
  }
  return (
    <div>
      <form>
        <input onChange={handleInput} type="text" className="todo-input" value={todo}/>
        <button 
          onClick={handleSubmit} 
          className="todo-button" 
          type="submit"
        >
          Add
        </button>
        <div className="select">
          <select onChange={handleStatus} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incompleted</option>
          </select>
        </div>
      </form>
    </div>
  )
}
