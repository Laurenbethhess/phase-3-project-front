import React, { useEffect, useState } from 'react'
import Item from './Item'

function ItemList({todos, onTodoDelete, onUpdateTodo}) {
    const renderTodos = todos.map(todo => <Item todo={todo} key={todo.id} onTodoDelete={onTodoDelete} onUpdateTodo={onUpdateTodo} />)

    return (
        <div>
            {renderTodos}
        </div>
    )
}

export default ItemList