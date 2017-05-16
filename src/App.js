import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      size: 30,
      color: '#ccc',
      backgroundColor: '#A49'
    }
  }

  changeFontSize(size) {
    this.setState({ size });
  }

  changeColor(color) {
    this.setState({ color });
  }

  changeBackgroundColor() {
    let backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.setState({ backgroundColor });
  }




  render() {
    const greeting = 'Welcome';
    const advice = 'Kick it like you mean it';
    const { size, color, backgroundColor } = this.state;

    return (
      <div className="App">
        <div className="App-header" style={{ backgroundColor }}>
          <h2>{greeting}, Get Your React On With Ivy</h2>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">

        </p>
        <div>size is {size} </div>
        <input type="range"
          value={size}
          onChange={event => this.changeFontSize(event.target.value)} />
        <br />
        <input type="color"
          value={color}
          onChange={event => this.changeColor(event.target.value)} />
        <button
          onClick={() => this.changeBackgroundColor()}>CLICK ME</button>
        <p style={{
          fontSize: `${size}px`,
          color: `${color}`
        }}>{advice}</p>
      </div>
    );
  }
}

export default App;
