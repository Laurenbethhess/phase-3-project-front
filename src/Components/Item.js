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
        return <EditTodo onUpdateTodo={handleUpdateTodo} todo={todo} />
    }

    function idName() {
        if (todo.importance == "1. high") {
            return 'high'
        } else if (todo.importance == "2. medium") {
            return 'medium'
        } else if(todo.importance == "3. low") {
            return 'low'
        }
    }
    
    return (
        <div className='list'>
                <div id={idName()}>
                    <br/>
                    <b className='item-text'>{todo.item.toUpperCase()}</b> 
                    <p className='item-text'>Importance: {todo.importance}</p>
                    <p className='item-text'>Category: {todo.category.category}</p>
                    <button className='btn' onClick={handleClick}>Edit</button>
                    {getEditor()}
                    <br/><br/>
                    <button className='trash'  onClick={handleDeleteClick}>❌</button>
                   

                </div>
        </div>
    )
}

export default Item
