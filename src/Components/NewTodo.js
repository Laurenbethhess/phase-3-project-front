import React, { useState } from 'react'

function NewTodo({onAddTodo}) {
    const [todo, setTodo] = useState("/")
    const [importance, setImportance] = useState("/")
    const [category_id, setCategoryId] = useState("/")

    function handleSubmit(e) {
      e.preventDefault()
  
      fetch("http://localhost:9292/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item: todo,
          importance: importance,
          category_id: category_id
        }),
      })
      .then((r) => r.json())
      .then(newTodo => {
        onAddTodo(newTodo)
        setTodo("/")
        setImportance("/")
        setCategoryId("/")
      })
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Todo</label>
        <input
          type="text"
          name="item"
          autoComplete="off"
          value={todo}
          placeholder="item"
          onChange={(e) => setTodo(e.target.value)}
        />
        <label>Importance</label>
        <input
          type="text"
          name="importance"
          autoComplete="off"
          value={importance}
          placeholder="importance"
          onChange={(e) => setImportance(e.target.value)}
        />
        <label>Category Id</label>
        <input
          type="text"
          name="category_id"
          autoComplete="off"
          value={category_id}
          placeholder="category_id"
          onChange={(e) => setCategoryId(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    )
}

export default NewTodo