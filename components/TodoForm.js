import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, TextField } from "@material-ui/core";

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    const changeTextField = (e) => {
        setTodo({
            ...todo,
            task: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuidv4() });
            //Reset task form
            setTodo({ ...todo, task: "" });
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="TodoForm">
                <TextField label="task" name="task"
                    type="text"
                    placeholder="Enter your task"
                    onChange={changeTextField} value={todo.task}></TextField>
                <Button type="submit">Add Task</Button>
            </form>
        </>
    )
}

export default TodoForm;