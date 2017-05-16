import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      color: '#ff0000',
      size: 3,
      backgroundColor: '#ffffff',
      horizontalCenter: 0,
      verticalCenter: 0,
      text: '',

    }
  }

  changeColor(color) {
    this.setState({ color });
  }

  changeSize(size) {
    this.setState({ size });
  }

  changeBackgroundColor(backgroundColor) {
    this.setState({ backgroundColor });
  }

  changeHorizontalCenter(horizontalCenter) {
    this.setState({ horizontalCenter });
  }

  changeVerticalCenter(verticalCenter) {
    this.setState({ verticalCenter });
  }

  changeText(text) {
    this.setState({ text });
  }

  render() {

    const { color, size, backgroundColor, horizontalCenter, verticalCenter, text } = this.state;

    return (
      <div className="App"
           style={{ backgroundColor: backgroundColor,
                    marginLeft: `${horizontalCenter}em`,
                    marginTop: `${verticalCenter}em` }}>
        
        <div className="App-header">
          <h1>Welcome to React Editor</h1>
        </div>

        <label>Background Color:
          <input type="color"
          value={backgroundColor}
          onChange={ e => this.changeBackgroundColor(e.target.value) } />
        </label>

        
        <label>Horizontal Center:
          <input type="range"
                value={horizontalCenter}
                onChange={ e => this.changeHorizontalCenter(e.target.value) } />
        </label>
        
        <label>Vertical Center:
          <input type="range"
                value={verticalCenter}
                onChange={ e => this.changeVerticalCenter(e.target.value) } />
        </label>

        <label>Font Color:
          <input type="color" 
                value={color}
                onChange={ e => this.changeColor(e.target.value) } />
        </label>
        
        <label>Size:
          <input type="range" 
                value={size}
                onChange={ e => this.changeSize(e.target.value) } />
        </label>
        
        <label>Message: 
          <input type="text"
                value={text}
                onChange={ e => this.changeText(e.target.value) } />
        </label>
        
        <p style={{ color, 
          fontSize: `${size}em`
        }}>
          {text}
        </p>
      </div>
    );
  }
}

export default App;
