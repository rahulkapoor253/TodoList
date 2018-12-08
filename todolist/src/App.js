import React, { Component } from 'react';
import Todo from './component/Todo';
import './App.css';
import AddTodo from './component/AddTodo';

class App extends Component {

constructor(props) {
  super(props);

  this.state = {
    todos : [
      {
        id : 1,
        content : 'buy milk'
      },
      {
        id : 2,
        content : 'buy bread'
      }
    ]
  }
  
}

handleDelete = (id) => {
console.log(id);
//return true to keep the item and false to delete it;
const todo = this.state.todos.filter( todo => {

  return todo.id !== id

}
);

this.setState({
  todos : todo
})
}


addTodo = (todo) => {
  console.log('add todo called');

  //to genereate some random id's;
todo.id = Math.random();
//append todo object to a new list and set again the state;
let todos = [...this.state.todos, todo] 
this.setState({
  todos : todos
})

}


  render() {
    return (
      <div className="App container">
       <h1 className="center blue-text">Todo List</h1>
      <Todo data={this.state.todos} deleteTodo={this.handleDelete}/>
      <AddTodo addData={this.addTodo}/>
      </div>
    );
  }
}

export default App;
