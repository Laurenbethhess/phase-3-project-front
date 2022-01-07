import React, { useEffect, useState } from 'react'

function EditTodo({onUpdateTodo, todo}) {
    const [newTodo, setTodo] = useState(todo.item)
    const [importance, setImportance] = useState(todo.importance)
    const [category_id, setCategoryId] = useState(todo.category_id)


    function handleFormSubmit(e) {
      e.preventDefault();
  
      fetch(`http://localhost:9292/todos/${todo.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item: newTodo,
          importance: importance,
          category_id: category_id
        }),
      })
      .then((r) => r.json())
      .then(updatedTodo => {
          onUpdateTodo(updatedTodo)
      })
    }
  
    return (
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="item"
          autoComplete="off"
          value={newTodo}
          placeholder="item"
          onChange={(e) => setTodo(e.target.value)}
        />

        <select onChange={(e) => setImportance(e.target.value)}>
          <option value={importance}>Update Importance</option>
          <option value="1. high">High</option>
          <option value="2. medium">Medium</option>
          <option value="3. low">Low</option>
        </select>
        <select onChange={(e) => setCategoryId(e.target.value)}>
          <option value={category_id}>Update Category</option>
          <option value="0">Not Assigned</option>
          <option value="1">Chores</option>
          <option value="2">Work</option>
          <option value="3">Exercise</option>
          <option value="4">Misc</option>
          <option value="5">Groceries</option>
          <option value="6">School</option>
        </select>
        <button type="submit">Update</button>
      </form>
    )
}

export default EditTodo