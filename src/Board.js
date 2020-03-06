import React, { Component } from 'react';
import Square from './Square';
import './Board.css';

export default class Board extends Component {
  render() {
    const squares = this.props.board.map((val, idx) => (
      <Square key={idx} index={idx} on={val} click={this.props.click} />
    ));
    return <div className="Flex-item Board">{squares}</div>;
  }
}
