import React from 'react';
import BoardController from './BoardController';
import './App.css';

function App() {
  return (
    <div className="App">
      <BoardController size={5} />
    </div>
  );
}

export default App;
