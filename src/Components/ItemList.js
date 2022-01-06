import React, { useEffect, useState } from 'react'
import Item from './Item'
import SearchBar from './SearchBar'

function ItemList({todos, onTodoDelete, onUpdateTodo}) {
    const [search, setSearch] = useState("")

    const displayedTodos = todos.filter(todo =>
    todo.item.toLowerCase().includes(search.toLowerCase())
    )

    const renderTodos = displayedTodos.map(todo => <Item todo={todo} key={todo.id} onTodoDelete={onTodoDelete} onUpdateTodo={onUpdateTodo} />)


    return (
        <div>
            <h2>Search</h2> 
            <SearchBar onSearch={setSearch}/>
            <br/><br/>
            {renderTodos}
        </div>
    )
}

export default ItemList