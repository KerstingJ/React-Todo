import React from 'react';

function Todo(props){
    return (
        <div className={`todoItem ${props.completed ? "complete" : ""}`}
        onClick={() => props.toggleCompleted(props.id)}
        >{props.value}</div>
    )
}

export default Todo;