import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super()

    this.state = {
      name: '',
      color: '#aaaaaa',
      font: 42
    };

  }

  changeMessage(name) {
    this.setState({ name });
  }

  changeColor(color) {
    this.setState({ color });
  }

  changeFontSize(font) {
    this.setState({ font });
  }



  render() {
    const {name, color, font} = this.state;

    return (
      <div className="welcome">
        <button style={{ color }} onClick={() => this.changeColor('#' + Math.floor(Math.random() * 16777215).toString(16))}>Welcome to the React party {name}!</button>
        <div className="name">
          <label>
            Name:
            <input
              value={name}
              onChange={e => this.changeMessage(e.target.value)} />
          </label>
          <label>
            Color:
            <input
              type='color'
              value={color}
              onChange={e => this.changeColor(e.target.value)} />
          </label>
        </div>
        <div className='display' style={{
          fontSize: `${font}px`, color}}>
          <input type='range' value={font} 
            onChange={e => { this.changeFontSize(e.target.value) }} /><br />
          {name}
        </div>
      </div >
    );
  }
}

export default App;
