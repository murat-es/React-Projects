import './App.css';
import newId from './utils/newid';
import TodoList from './components/TodoList';

import React, {  Component } from 'react'

class App extends Component {

  state = {
    todos: [
      {
        "id": newId(),
        "task": "go shopping",
        "isDone": false
      },
      {
        "id": newId(),
        "task": "do exercise",
        "isDone": false
      },
      {
        "id": newId(),
        "task": "pay the bill",
        "isDone": false
      },
      {
        "id": newId(),
        "task": "clean the house",
        "isDone": false
      }
    ],
    inputArea: ""
  }





  deleteTodo = (task) => {
    const newTodoList = this.state.todos.filter(
      t => t.id !== task.id
    );
    this.setState(state => ({
      todos: newTodoList
    }))
  }




  lineTodo = (task) => {
    this.setState(state => ({

      todos: state.todos.map(
        t => t.id === task.id ? { ...t, isDone: !task.isDone } : t
      )
    }))
  }



  addTodo = () => {
    if (document.getElementById('myInput').value === "") {
      return;
    }

    document.getElementById('myInput').value = '';

    this.setState(state => ({
      inputArea: ""
    }))

    this.setState(state => ({
      todos: [...state.todos, { "id": newId(), "task": this.state.inputArea, "isDone": false }]
    }))
  }



  inform = (event) => this.setState({ inputArea: event.target.value })

 

  render() {
    return (
      <div className="App">
        <div>
          <p>TO DO LİST</p>
          <input id="myInput" type="text" onChange={this.inform} placeholder="Add a todo..."></input>
          <button type="button" onClick={this.addTodo}>Add</button>
        </div>

        <TodoList todo={this.state.todos}
          deleteTodoProp={this.deleteTodo}
          isDoneProp={this.lineTodo} />
      </div>
    )
  }
}

export default App;
