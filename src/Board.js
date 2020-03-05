import React, { Component } from 'react';
import Square from './Square';
import { lightController } from './LightController';
import './Board.css';

export default class Board extends Component {
  state = {
    board: Array(this.props.size * this.props.size).fill(false),
  };

  componentDidMount = () => {
    const size = this.props.size;
    let randIdx = [];
    while (randIdx.length < Math.floor((size * size) / 3)) {
      const randNum = Math.floor(Math.random() * (size * size));
      if (!randIdx.includes(randNum)) randIdx.push(randNum);
    }
    console.log(randIdx);
    let newBoard = this.state.board;
    randIdx.map((idx) => (newBoard[idx] = true));
    this.setState({
      board: newBoard,
    });
  };

  click = (index) => {
    let newBoard = this.state.board;
    const squares = lightController(index, this.props.size);
    squares.map((val) => (newBoard[val] = !newBoard[val]));
    this.setState({
      board: newBoard,
    });
  };

  render() {
    const squares = this.state.board.map((val, idx) => (
      <Square key={idx} index={idx} on={val} click={this.click} />
    ));
    return <div className="Flex-item Board">{squares}</div>;
  }
}
