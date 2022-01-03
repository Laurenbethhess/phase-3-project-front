import React, { useEffect, useState } from 'react'

function TodoList({todo}) {

    return (
        <div>
            <li>{todo.item.toLowerCase()}</li>
        </div>
    )
}
export default TodoList