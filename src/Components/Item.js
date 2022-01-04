import React, { useEffect, useState } from 'react'
import EditTodo from './EditTodo';

function Item({todo, onTodoDelete, onUpdateTodo}) {

    function handleDeleteClick() {
        fetch(`http://localhost:9292/todos/${todo.id}`, {
          method: "DELETE",
        })
        onTodoDelete(todo.id)
    }

    function handleUpdateTodo(updatedTodo) {
        onUpdateTodo(updatedTodo)
      }
    
    return (
        <div>
                <li>
                    <b>{todo.item.toUpperCase()}</b> 
                    <p>importance: {todo.importance}</p>
                    <p>category: {todo.category.category}</p>
                    <EditTodo onUpdateTodo={handleUpdateTodo} todo={todo}/>
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
