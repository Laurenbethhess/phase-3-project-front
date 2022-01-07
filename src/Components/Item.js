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
                    <p className='item-text'>importance: {todo.importance}</p>
                    <p className='item-text'>category: {todo.category.category}</p>
                    <button onClick={handleClick}>Edit</button>
                    {getEditor()}
                    <br/><br/>
                    <button onClick={handleDeleteClick}>🗑</button>
                    <br/><br/>
                    <>_______________________________________________</>
                    <br/><br/>

                </div>
        </div>
    )
}

export default Item
