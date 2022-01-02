import React, { useEffect, useState } from 'react'

function TodoList({todo}) {

    return (
        <div>
            <li>{todo.item}</li>
        </div>
    )
}
export default TodoList