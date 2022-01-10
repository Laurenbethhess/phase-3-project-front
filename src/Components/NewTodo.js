import React, { useState } from 'react'

function NewTodo({onAddTodo}) {
    const [todo, setTodo] = useState("")
    const [importance, setImportance] = useState("1. high")
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
        setImportance(importance)
        setCategoryId(category_id)
      })
    }
  
    return (
      <div>
        {/* <h3 className='all-todos'>Add New Todo</h3> */}
        <form className='add-forum' onSubmit={handleSubmit}>
          <input
            type="text"
            name="item"
            autoComplete="off"
            value={todo}
            placeholder="Add Todo..."
            onChange={(e) => setTodo(e.target.value)}
          />
          <br></br>
          <select className='importance' onChange={(e) => setImportance(e.target.value)}>
            <option value={importance}>Choose Importance</option>
            <option value="1. high">High</option>
            <option value="2. medium">Medium</option>
            <option value="3. low">Low</option>
          </select>
          <select className='category' onChange={(e) => setCategoryId(e.target.value)}>
            <option value={category_id}>Choose Category</option>
            <option value="0">Not Assigned</option>
            <option value="1">Chores</option>
            <option value="2">Work</option>
            <option value="3">Exercise</option>
            <option value="4">Misc</option>
            <option value="5">Groceries</option>
            <option value="6">School</option>
          </select>
          <br></br>
          <button className='btn' id='add' type="submit">Add Todo</button>
        </form>
        <br/>
      </div>
      
    )
}

export default NewTodo