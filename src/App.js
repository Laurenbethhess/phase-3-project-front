import './App.css'
import React, { useEffect, useState } from 'react'
import ItemList from './Components/ItemList'
import NewTodo from './Components/NewTodo'
import Header from './Components/Header'

function App() {
  const [todos, setTodos] = useState([])
  const [todosList, setTodosList] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/todos')
    .then(r => r.json())
    .then(todos => setTodos(todos))
  }, [])

  useEffect(() => {
    fetch('http://localhost:9292/categories')
    .then(r => r.json())
    .then(categories => setCategories(categories))
  }, [])

  useEffect(() => {
    fetch('http://localhost:9292/todos-alphabetical')
    .then(r => r.json())
    .then(todosList => setTodosList(todosList))
  }, [])

  function handleAddTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function handleDeleteItem(id) {
    const updatedTodos = todos.filter(todo => todo.id !== id)
    setTodos(updatedTodos)
  }

  function handleUpdateTodo(updatedTodoObj) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === updatedTodoObj.id) {
        return updatedTodoObj;
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  }


  return (
   <div className="center">
     <Header categories={categories} todosList={todosList}/>
     <h2>Enter New Todo</h2>
     <NewTodo onAddTodo={handleAddTodo}/>
     <>_______________________________________________</>
     <br/><br/>
     <ItemList todos={todos} onTodoDelete={handleDeleteItem} onUpdateTodo={handleUpdateTodo}/>
     <br/><br/>
   </div>
  )
}

export default App;
