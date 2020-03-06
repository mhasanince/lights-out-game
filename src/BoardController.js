import React, { Component } from 'react';
import Board from './Board';
import Menu from './Menu';
import './BoardController.css';
import { lightController } from './LightController';

export default class BoardController extends Component {
  state = {
    board: Array(this.props.size * this.props.size).fill(false),
    history: [Array(this.props.size * this.props.size).fill(null)],
    clickNum: 0,
  };

  componentDidMount = () => {
    const size = this.props.size;
    let randIdx = [];
    while (randIdx.length < Math.floor((size * size) / 3)) {
      const randNum = Math.floor(Math.random() * (size * size));
      if (!randIdx.includes(randNum)) randIdx.push(randNum);
    }
    let newBoard = this.state.board;
    randIdx.map((idx) => (newBoard[idx] = true));
    this.setState({
      board: newBoard,
    });
  };

  click = (index) => {
    let newBoard = this.state.board;
    console.log(this.state.history);
    const squares = lightController(index, this.props.size);
    squares.map((val) => (newBoard[val] = !newBoard[val]));
    this.setState({
      board: newBoard,
      history: this.state.history.concat([this.state.board]),
    });
  };

  timeTravel = () => {};

  render() {
    return (
      <div className="BoardController">
        <h1 className="BoardController-header">Lights Out Game</h1>
        <div className="BoardController-content">
          <Board board={this.state.board} click={this.click} />
          <Menu history={this.state.history} timeTravel={this.timeTravel} />
        </div>
      </div>
    );
  }
}
