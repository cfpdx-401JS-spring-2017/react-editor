/* eslint-disable */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'Welcome to Hops Music!',
      color: '#9F0E11',
      fontSize: '20px',
      display: 'none',
      image: 'https://s-media-cache-ak0.pinimg.com/736x/2f/2b/b6/2f2bb64235aa5ae8564168415e6d3a11.jpg'
    };
  }

  changeColor(color) {
    this.setState({ color });
  }

  changeFontSize(fontSize) {
    this.setState({ fontSize });
  }

  changeMessage(message) {
    this.setState({ message });
  }

  addImage() {
    let displayState = this.state.display === 'none' ? 'inline-block' : 'none'
    console.log(displayState);
    this.setState({ display: displayState });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Let's Play in React: What do you want to do?</h2>
        </div>
        <div className="settings">
          <h3>Manipulate the fields below:</h3>
          <p><label>
            Color:
            <input
              type="color"
              value={this.state.color}
              onChange={e => this.changeColor(e.target.value)} />
          </label></p>
          <p><label>
            Message:
            <input
              type="message"
              value={this.state.message}
              onChange={e => this.changeMessage(e.target.value)} />
          </label></p>
          <p><label>
            Font Size:
            <input
              type="range"
              value={this.state.fontSize}
              onChange={e => this.changeFontSize(e.target.value)} />
          </label></p>
          <p><label>
            Toggle Pom:
            <input
              type="button"
              value="Do You Like Poms? Press!"
              onClick={e => this.addImage()} />
          </label></p>
        </div>
        <div className="display" 
        style={{ 
          color: this.state.color, 
          fontSize: `${this.state.fontSize}px`
          }} >
          <p className="text">{this.state.message}</p>
          <div className="image" style={{ display: this.state.display }}><img src={this.state.image} /></div>
        </div>
      </div>
    );
  }
}

export default App;
