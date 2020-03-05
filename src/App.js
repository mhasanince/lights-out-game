import React from 'react';
import Board from './Board';
import Menu from './Menu';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="App-header">Lights Out Game</h1>
      <div className="App-content">
        <Board size={5} />
        <Menu />
      </div>
    </div>
  );
}

export default App;
