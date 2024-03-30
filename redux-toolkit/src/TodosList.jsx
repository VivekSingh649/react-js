import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, removeAll } from './features/todo/todoSlice'

function TodosList() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.text}
                    <button className='deleteBtn' onClick={() => dispatch(removeTodo(todo.id))}>Remove Task</button>
                </li>
            ))}
            <button onClick={() => dispatch(removeAll())}>Remove All</button>
        </ul>
    )
}

export default TodosList
