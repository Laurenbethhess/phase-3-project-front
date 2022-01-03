import React, { useState } from 'react'

function NewTodo({onAddTodo}) {
    const [todo, setTodo] = useState("")
    const [importance, setImportance] = useState("")
    const [category_id, setCategoryId] = useState("0")

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
        setTodo("")
        setImportance("")
        setCategoryId("0")
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
        <select onChange={(e) => setCategoryId(e.target.value)}>
          <option value="0">Not Assigned</option>
          <option value="1">Work</option>
          <option value="3">Exercise</option>
          <option value="4">Misc</option>
          <option value="5">Groceries</option>
          <option value="6">Kids</option>
        </select>
        <button type="submit">Add Todo</button>
      </form>
    )
}

export default NewTodo