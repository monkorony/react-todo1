import React from 'react'

export const Todo = ({ text, itemId, todo, todosList, setToDosList }) => {

  const handleDelete = (e) => {
    //console.log(todo)
    //filter element that is clicked out of arr
    setToDosList(todosList.filter(el => el.id !== todo.id))
  }
  const handleComplete = () => {
    let list = todosList.map((el) => {
      if (el.id === todo.id) {
        return {...el, completed: !el.completed}
      }
      return el;
    })
    setToDosList(list);
  }

  return (
      <li className={`todo.complete ${todo.completed ? "completed" : ""}`} key={itemId}>
        {text}
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleComplete}>Completed</button>
      </li>
    
  )
}
