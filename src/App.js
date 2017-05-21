import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      color: '#6f5aaa',
    };

  }

  changeMessage(name) {
    this.setState({ name });
  }

  changeColor(color) {
    this.setState({ color });
  }



  render() {
    const name = this.state.name;
    const color = this.state.color;

    return (
      <div className="name">
        <button style={{ color: color}} onClick={() => this.changeColor('#' + Math.floor(Math.random() * 16777215).toString(16))}>Welcome to the React party {name}!</button>
        <div className="settings">
          <label>
            Name:
            <input
              value={name}
              onChange={e => this.changeMessage(e.target.value)} />
          </label>
          <label>
            Color:
            <input
              type="color"
              value={color}
              onChange={e => this.changeColor(e.target.value)} />
          </label>
        </div>
        <div className="display"
          style={{ color: color }}>
          {name}<br/>
        </div>
      </div >
    );
  }
}

export default App;
