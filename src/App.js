import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super()

    this.state = {
      name: '',
      color: '#aaaaaa',
      font: 42,
      rotation: 0
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

  makeRotate(rotation) {
    this.setState({ rotation });
  }



  render() {
    const {name, color, font, rotation} = this.state;

    return (
      <div className="welcome">
        <button 
        style={{ color }} 
        onClick={() => {
          this.changeColor('#' + Math.floor(Math.random() * 16777215).toString(16))}
        }>
        Welcome to the React party {name}!</button>
        <p>Click Above to Randomly Change Font Color!</p>
        <div className="name">
          <label>
            Enter your Name Here:
            <input
              value={name}
              onChange={e => this.changeMessage(e.target.value)} />
          </label>
          <label>
            Choose a Color Here:
            <input
              type='color'
              value={color}
              onChange={e => this.changeColor(e.target.value)} />
          </label>
        </div>
        <p>Change Name-size with the Slider Below!</p>
        <div className='display' style={{
          fontSize: `${font}px`, color
        }}>
          <input type='range' value={font}
            onChange={e => { this.changeFontSize(e.target.value) }} /><br />
          {name} <br />
        </div>
        <div>
          <button className='spinner'
            style={{
              animation: `rotation infinite ${this.state.rotation}s linear`
            }}
            font-size={'42px'} 
            onClick={() => {
              this.state.rotation === 0
                ?
                this.setState({ rotation: 1 })
                :
                this.setState({ rotation: 0 })
            }}>
            Click to Spin!</button>
        </div>
      </div >
    );
  }
}

export default App;
