import React from 'react';

function TodoForm(props){
    return (
        <form className="todoForm">
            <input 
                name="todoInput" 
                type="text" 
                value={props.value}
                onChange={props.updateInputState}
            />

            <button
                className="add"
                onClick={props.addItem}
            >Add Item</button>

            <button
                className="clear"
                onClick={props.removeCompleted}
            >Clear Completed</button>
        </form>
    )
}

export default TodoForm;