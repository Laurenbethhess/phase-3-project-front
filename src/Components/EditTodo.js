import React, { useEffect, useState } from 'react'

function EditTodo({onUpdateTodo, todo}) {
    const [todoUpdate, setTodoUpdate] = useState('');

    function handleFormSubmit(e) {
      e.preventDefault();
  
      fetch(`http://localhost:9292/todos/${todo.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item: todoUpdate,
        }),
      })
      .then((r) => r.json())
      .then(updatedTodo => {
          onUpdateTodo(updatedTodo)
          setTodoUpdate('')
      })
    }
  
    return (
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="body"
          autoComplete="off"
          value={todoUpdate}
          placeholder="edit"
          onChange={(e) => setTodoUpdate(e.target.value)}
        />
        <input type="submit" value="Save" />
      </form>
    )
}

export default EditTodo