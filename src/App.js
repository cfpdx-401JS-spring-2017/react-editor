import React, { Component } from 'react';
import logo from './teapot-logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      message: 'Nicky',
      color: '#aaaaaa',
      height: 300,
      width: 300,
      shape: 50,
      rotation: 0,
      opacity: 1
    }
  }

  changeMessage(message) {
    this.setState({ message });
  }

  changeColor(color) {
    this.setState({ color });
  }

  changeWidth(width) {
    this.setState({ width });
  }

  changeHeight(height) {
    this.setState({ height });
  }

  changeShape(shape) {
    this.setState({ shape });
  }

  changeOpacity(opacity) {
    this.setState({ opacity });
  }

  makeItRotate(rotation) {
    this.setState({ rotation });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt={logo} style={{
              animation: `spin infinite ${this.state.rotation}s linear`}}/>
          <h4>Welcome to {this.state.message}'s React Editor</h4>
          <label>
            Hi, What's your name?
            <input
              value={this.state.message}
              onChange={e => this.changeMessage(e.target.value)}
            />
          </label>
        </div>

        <div className="box-settings">
          <div className="color-box"
            style={{
              backgroundColor: this.state.color,
              height: this.state.height,
              width: this.state.width,
              borderRadius: this.state.shape,
              animation: `spin infinite ${this.state.rotation}s linear`,
              opacity: this.state.opacity
            }}>
          </div>
        </div>
        <h3>Make this div dance!</h3>
        <label>
          Color
            <input
            type="color"
            value={this.state.color}
            onChange={e => this.changeColor(e.target.value)} />
        </label>
        <label>
          Spin
            <input
            type="range"
            min='0'
            max='5'
            step='.1'
            value={this.state.rotation}
            onChange={e => this.makeItRotate(e.target.value)}/>
        </label>
        <label>
          Height
            <input
            type="range"
            min='0'
            max='300'
            value={this.state.height}
            onChange={e => this.changeHeight(e.target.value)} />
        </label>
        <label>
          Width
            <input
            type="range"
            min='0'
            max='300'
            value={this.state.width}
            onChange={e => this.changeWidth(e.target.value)} />
        </label>
        <label>
          Shape
            <input
            type="range"
            min='0'
            max='200'
            value={this.state.shape}
            onChange={e => this.changeShape(e.target.value)} />
        </label>
        <label>
          Opacity
            <input
            type="range"
            min='0'
            max='1'
            step='.10'
            value={this.state.opacity}
            onChange={e => this.changeOpacity(e.target.value)} />
        </label>
      </div>
    );
  }
}

export default App;
