import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './features/todo/todoSlice';

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput('')
        if (!input) {
            alert("Please add any task")
        } else {
            dispatch(addTodo(input));
        }

    }

    return (
        <>
            <section className="add_todo_container">
                <form className="add_todo" onSubmit={handleSubmit}>
                    <input type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder='Add your task here' />
                    <button className='addtodo_btn'>Add Task</button>
                </form>
            </section>
        </>
    )
}

export default AddTodo
