import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './komponente/Header';
import ToDoList from './komponente/ToDoList';
import AddToDoItem from './komponente/AddToDoItem';
import AboutApp from './komponente/AboutApp'
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    todolistdata: [
      {
        id: uuidv4(),
        title: "Baci smeće",
        completed: true
      },

      {
        id: uuidv4(),
        title: "Zovni starog",
        completed: false
      },

      {
        id: uuidv4(),
        title: "Otiđi po Alanu",
        completed: false
      }
    ]
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
    this.setState({todolistdata: [...this.state.todolistdata.filter(toDoItemData => 
      toDoItemData.id !== id)]})
  }

  addToDoItem = (title) => {
    const newToDo = {
      id: uuidv4(),
      title,
      completed: false
    }
    this.setState({todolistdata: [...this.state.todolistdata, newToDo] })
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
