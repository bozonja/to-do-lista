import React, { Component } from 'react';
import './App.css';
import Todolista from './komponente/Todolista';

class App extends Component {
  state = {
    todolista: [
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
        <h1>To Do Lista</h1>
        <Todolista />
      </div>
    );
  }
}

export default App;
