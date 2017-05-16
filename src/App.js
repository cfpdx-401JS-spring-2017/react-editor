import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      size: 30,
      color: '#cccccc',
      headerBackground: '#A49',
      adviceBackground: '#A49',
      iconSize: 80
    }
  }

  changeFontSize(size) {
    this.setState({ size });
  }

  changeColor(color) {
    this.setState({ color });
  }

  changeBackgroundColor(element) {
    if (element === 'adviceBackground') {
      let elementColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      this.setState({ adviceBackground: elementColor });
    } else if (element === 'headerBackground') {
      let elementColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      this.setState({ headerBackground: elementColor });

    }
  }

  changeIconSize(iconSize) {
    this.setState({ iconSize })
  }




  render() {
    const greeting = 'Welcome';
    const advice = 'Kick it like you mean it';
    const { size, color, adviceBackground, headerBackground } = this.state;

    return (
      <div className="App">
        <div className="App-header" style={{backgroundColor: headerBackground }}>
          <h2>{greeting}, Get Your React On With Ivy</h2>
          <img src={logo} className="App-logo" alt="logo"
          />
        </div>
        <p className="App-intro">

        </p>
        <div>size is {size} </div>
        <input type="range"
          value={size}
          onChange={event => {
            this.changeBackgroundColor(adviceBackground);
            this.changeFontSize(event.target.value)
          }} />
        <br />
        <input type="color"
          value={color}
          onChange={event => this.changeColor(event.target.value)} />
        <button
          onClick={() => this.changeBackgroundColor('headerBackground')}>Color Change</button>
        <br />
        <p style={{
          fontSize: `${size}px`,
          color,
          backgroundColor: adviceBackground
        }}>{advice}</p>
      </div>
    );
  }
}

export default App;
