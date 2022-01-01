import './App.css'
import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import NewTodo from './NewTodo'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/todos')
    .then(r => r.json())
    .then(todos => setTodos(todos))
  }, [])

  function handleAddTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function handleDeleteItem(id) {
    const updatedTodos = todos.filter(todo => todo.id !== id)
    setTodos(updatedTodos)
  }


  return (
   <div>
     <ItemList todos={todos} onTodoDelete={handleDeleteItem}/>
     <NewTodo onAddTodo={handleAddTodo}/>
   </div>
  )
}

export default App;
