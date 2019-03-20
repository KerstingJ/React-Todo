import './app.css';
import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor(){
        super();
        this.state={
            todoItems: [
                {task: "gotta do a thing", id: Date.now()-27, completed: false},
                {task: "gotta do it for the vine", id: Date.now()-350, completed: false},
                {task: "not doin this one tho", id: Date.now()-271, completed: false},
                {task: "This one doin last minute", id: Date.now(), completed: false},
            ],
            todoInput: ""
        };
    }

    getIndexById(id){
        let todoArray = this.state.todoItems;
        for (let i=0;i<todoArray.length;i++){
            if (todoArray[i].id === id){
                return i;
            }
        }
    }

    updateInput = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    toggleCompleted = id => {
        let index = this.getIndexById(id);
        let copy = [...this.state.todoItems];
        copy[index].completed = !copy[index].completed;

        this.setState({todoItems: copy})
    }

    removeCompleted = event => {
        event.preventDefault();
        let incomplete = [...this.state.todoItems].filter(item => !item.completed);
        this.setState({todoItems: incomplete});
    }

    addItem = (event) => {
        event.preventDefault();
        if (this.state.todoInput){
            let newItem = {
                task: this.state.todoInput,
                id: Date.now(),
                completed: false,
            }

            this.setState({todoItems: [...this.state.todoItems, newItem], todoInput:""})
        }
    }

    render(){
        return(
            <div className="todoListContainer">
                <h1>ToDo List</h1>
                <TodoForm 
                    value={this.state.todoInput} 
                    addItem={this.addItem}
                    updateInputState={this.updateInput}
                    removeCompleted={this.removeCompleted}
                />
                <TodoList 
                    tasks={this.state.todoItems}
                    toggleCompleted={this.toggleCompleted}
                />
            </div>
        )
    }
}

export default App;
