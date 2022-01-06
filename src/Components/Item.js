import React, { useEffect, useState } from 'react'
import EditTodo from './EditTodo';

function Item({todo, onTodoDelete, onUpdateTodo}) {

    const [editor, setEditor] = useState(false)

    function handleClick() {
        setEditor(!editor)
    }

    function handleDeleteClick() {
        fetch(`http://localhost:9292/todos/${todo.id}`, {
          method: "DELETE",
        })
        onTodoDelete(todo.id)
    }

    function handleUpdateTodo(updatedTodo) {
        onUpdateTodo(updatedTodo)
      }

    function getEditor() {
        if (editor)
        return <EditTodo onUpdateTodo={handleUpdateTodo} todo={todo}/>
    }
    
    return (
        <div className='list'>
                <li className='todo'>
                    <b>{todo.item.toUpperCase()}</b> 
                    <p>Importance: {todo.importance}</p>
                    <p>Category: {todo.category.category}</p>
                    <button onClick={handleClick}>Edit</button>
                    {getEditor()}
                    <br/><br/>
                    <button onClick={handleDeleteClick}>🗑</button>
                    <br/><br/>
                    <>_______________________________________________</>
                    <br/><br/>

                </li>
        </div>
    )
}

export default Item
