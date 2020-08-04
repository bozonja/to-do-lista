import React from 'react';
import './App.css';
import './komponente/Todolista'
import Todolista from './komponente/Todolista';

function App() {
  return (
    <div className="App">
      <h1>To Do Lista</h1>
      <Todolista />
    </div>
  );
}

export default App;
