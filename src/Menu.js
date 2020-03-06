import React, { Component } from 'react';

export default class Menu extends Component {
  render() {
    const history = this.props.history.map((val, idx) => {
      return <li key={idx}>Go to move #{idx}</li>;
    });
    return (
      <div className="Flex-item Menu">
        <button>Restart</button>
        <div className="Menu-click">
          <h4>Clikced: 0</h4>
        </div>
        <ul>{history}</ul>
      </div>
    );
  }
}
