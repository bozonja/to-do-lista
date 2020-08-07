import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './komponente/Header';
import ToDoList from './komponente/ToDoList';
import AddToDoItem from './komponente/AddToDoItem';
import AboutApp from './komponente/AboutApp'
//import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

class App extends Component {
  state = {
    todolistdata: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(response => this.setState({todolistdata: response.data}))
  } 

  toggleCompleted = (id) => {
    this.setState({todolistdata : this.state.todolistdata.map(toDoItemData => {
      if(toDoItemData.id === id) {
        toDoItemData.completed = !toDoItemData.completed
      }
      return toDoItemData;
    })});
  }

  delToDoItem = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response => this.setState({todolistdata: 
      [...this.state.todolistdata.filter(toDoItemData => 
      toDoItemData.id !== id)]}))

  }

  addToDoItem = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
    .then(response => this.setState({todolistdata: 
      [...this.state.todolistdata, response.data] }))
  }

  render() {  
    return (
      <div className="App">
        <Router>
          <div className="container">
            <Header />
            <Route exact path="/to-do-lista" render={komponente => (
              <div>
                <AddToDoItem addToDoItem={this.addToDoItem}/>
                <ToDoList 
                  getToDoListData={this.state.todolistdata} 
                  toggleCompleted={this.toggleCompleted}
                  delToDoItem={this.delToDoItem}
                />
              </div>
            )} />
            <Route path="/about" component={AboutApp} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
