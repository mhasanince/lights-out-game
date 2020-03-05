import React, { Component } from 'react';
import './Square.css';

export default class Square extends Component {
  handleClick = () => {
    this.props.click(this.props.index);
  };

  render() {
    const style = `Square ${this.props.on ? 'Square-on' : ''}`;
    return <div className={style} onClick={this.handleClick}></div>;
  }
}
