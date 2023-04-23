import {useContext, useState, useRef, useEffect } from "react";

import { tasksContext } from "./TasksProvider";

import '../css/TaskForm.css'

const TaskForm = () => {
    const {Add} = useContext(tasksContext)
    const inputRef = useRef(null)
    
    useEffect(() => {
        inputRef.current.focus()
    })

    const [value, setaValue] = useState('')
    const [id, setId] = useState(0)
    const handleForm = e => e.preventDefault()
    const handleInput = e => setaValue(e.target.value)
    const handleButton = () => {
        let Id = id
        const date = new Date().toISOString().slice(0, 10)
        const time = new Date().toLocaleTimeString()
        if(value.length > 0){
        const task = {
            id: Id++,
            text: value,
            date: date,
            isDone: false,
            priority: false,
            time: time
        }

        setId(Id)
        setaValue('')
        Add(task)
    }else alert('You need to write something')
    }

    return ( 
        <form className="taskForm" onSubmit={handleForm} >
            <input ref={inputRef} type="text" onChange={handleInput} value={value} placeholder="Add Task..."/>
            <button onClick={() => handleButton()} type="submit">Add</button>
        </form>
     );
}
 
export default TaskForm;