import React, { Component } from 'react';
import AddTodo from './AddTodo';
import Todos from './Todos';
class App extends Component {
  state ={
    todos:[
      {id:1, content: 'buy some milk'},
      {id:2, content:'play mario kart'}
    ]
  }

  deleteTodo=(id)=>{
    const todos = this.state.todos.filter( todo => {
      console.log(id);
      return todo.id !== id
  });

  this.setState({
    todos:todos
  })}

  addTodo = (todo) =>{
    todo.id = Math.random();
    let todos=[...this.state.todos, todo]

    this.setState({
      todos:todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
      <h1 className='center green-text'>Todo's</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
