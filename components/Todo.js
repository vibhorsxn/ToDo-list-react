import React from "react";
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
// import CloseIcon from '@material-ui/icons/Close';

function Todo({ todo, toggleComplete, removeTodo }) {

    const handleCheckboxClick = () => {
        toggleComplete(todo.id);
    }

    const handleRemoveClick = () => {
        removeTodo(todo.id);
    }
    return (
        <>
            <ListItem style={{ display: "flex" }}>
                <Checkbox onClick={handleCheckboxClick} checked={todo.completed}></Checkbox>

                <Typography variant="body1"
                    style={{
                        color: "black",
                        textDecoration: todo.completed ? "line-through" : null
                    }}

                >{todo.task}</Typography>
                <IconButton onClick={handleRemoveClick}>delete</IconButton>
            </ListItem>
        </>
    )
}

export default Todo;

