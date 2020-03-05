import React, { Component } from 'react';

export default class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <button>Restart</button>
        <div className="Menu-click">
          <h4>Clikced: 0</h4>
        </div>
      </div>
    );
  }
}
