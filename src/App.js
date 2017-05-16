import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

constructor(props) {
  super(props);

  this.state = {
    size: props.size,
    color: '#aaaaa'
  }
}

changeFontSize (size){
  this.setState({ size });
}

  render() {
const name = 'Ivy';
const advice = 'Kick it like you mean it';
const { size, color } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <h2>{name}</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <div>size is {size}
           
           </div>
          <h2>Get Your React On</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
         <input type="range"
            value={size}
            onChange={event => this.changeFontSize(event.target.value)} />
            <br/>
            <input type="color"
            value={color}
            onChange={event => this.changeColor(event.target.value)} />
            <button value={size}
          onClick={event => this.changeFontSize(event.target.value)}>CLICK ME</button>
            <p style={{
                  fontSize: `${size}px`,
                  color
              }}>>{advice}</p>
      </div>
    );
  }
}

export default App;
