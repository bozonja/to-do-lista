import React, { Component } from 'react';
import './App.css';
import ToDoList from './komponente/ToDoList';

class App extends Component {
  state = {
    todolistdata: [
      {
        id: 1,
        naslov: "Baci smeće",
        izvršeno: false
      },

      {
        id: 2,
        naslov: "Zovni starog",
        izvršeno: false
      },

      {
        id: 3,
        naslov: "Otiđi po Alanu",
        izvršeno: false
      }
    ]
  }

  render () {  
    return (
      <div className="App">
        <ToDoList getToDoListData={this.state.todolistdata} />
      </div>
    );
  }
}

export default App;
