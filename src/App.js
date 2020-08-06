import React, { Component } from 'react';
import './App.css';
import Header from './komponente/Header';
import ToDoList from './komponente/ToDoList';
import AddToDoItem from './komponente/AddToDoItem';
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
        <div className="container">
          <Header />
          <AddToDoItem addToDoItem={this.addToDoItem}/>
          <ToDoList 
            getToDoListData={this.state.todolistdata} 
            toggleCompleted={this.toggleCompleted}
            delToDoItem={this.delToDoItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
