import React, { useEffect, useState } from 'react'
import Item from './Item'

function ItemList({todos, onTodoDelete}) {
    const renderTodos = todos.map(todo => <Item todo={todo} key={todo.id} onTodoDelete={onTodoDelete} />)

    return (
        <div>
            {renderTodos}
        </div>
    )
}

export default ItemList