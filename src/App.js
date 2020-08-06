import React, { Component } from 'react';
import './App.css';
import ToDoList from './komponente/ToDoList';

class App extends Component {
  state = {
    todolistdata: [
      {
        id: 1,
        title: "Baci smeće",
        completed: true
      },

      {
        id: 2,
        title: "Zovni starog",
        completed: false
      },

      {
        id: 3,
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

  render() {  
    return (
      <div className="App">
        <ToDoList 
          getToDoListData={this.state.todolistdata} 
          toggleCompleted={this.toggleCompleted}
          delToDoItem={this.delToDoItem}
        />
      </div>
    );
  }
}

export default App;
