// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';


function TodoList(props) {
    return (
        <div className="todoList">
            {props.tasks.map(task => {
                return (
                    <Todo 
                        key={task.id}
                        id={task.id}
                        value={task.task}
                        toggleCompleted={props.toggleCompleted}
                        completed={task.completed}
                    />
                )
            })}
        </div>
    )
}

export default TodoList;