import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      size: 75,
      color: '#cccccc',
      headerBackground: '#A81',
      adviceBackground: '#A49',
      iconSize: 80,
      message: '',
      messageSize: 40,
      fontFamily: ['Georgia', 'Courier', 'Helvetica'],
      currentFont: 'Helvetica'
    }
  }

  changeAdviceSize(size) {
    this.setState({ size });
  }

  changeMesageSize(messageSize) {
    this.setState({ messageSize });
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
    //add code to resize image by dragging
    this.setState({ iconSize })
  }

  changeCurrentFont() {
    const currentFont = this.state.currentFont;
    const fontFamily = this.state.fontFamily;
    const currentIndex = fontFamily.findIndex(font => font === currentFont);
    let nextIndex = currentIndex + 1;
    if (nextIndex > fontFamily.length) {
      nextIndex = 0;
    }
    let nextFont = fontFamily[nextIndex];
    this.setState({ currentFont: nextFont });
  }

  changeMessage(message) {
    this.setState({ message })
  }


  render() {
    const greeting = 'Welcome';
    const advice = 'Kick it like you mean it';
    const { size, color, adviceBackground, headerBackground, message, messageSize } = this.state;

    return (
      <div className="App">
        <div className="App-header" style={{ backgroundColor: headerBackground }}>
          <h2>{greeting} To Ivy's React Sandbox</h2>
          <img src={logo} className="App-logo" alt="logo"
          />
        </div>
        <br />
        <form onSubmit={event => {
          event.preventDefault();
          this.changeMessage(event.target.elements.fortune.value); 
        }}
          className = "fortune_form" >
            <input style={{
              fontSize: '15px',
              borderRadius: '5px',
              backgroundColor: 'white'
            }}
              name="fortune"
              type="text"
              placeholder="Predict My Future" />
            <input
              style={{
                fontSize: '15px',
                borderRadius: '5px',
                backgroundColor: 'white'
              }}
              type="submit"
              name="submit"
            />
        </form>
        <p className="App-intro"
          style={{
            fontSize: `${messageSize}px`,
            color,
            backgroundColor: adviceBackground,
            fontFamily: this.state.currentFont
          }} >
          Fortune: {this.state.message} </p> {/*Q: why doesn't message render?*/}
        <br />
        <div>FONT SIZE IS {size} <br /> COLOR IS {adviceBackground} </div>
        <input type="range"
          value={size}
          onChange={event => {
            this.changeBackgroundColor('adviceBackground');
            this.changeAdviceSize(event.target.value);
            this.changeMesageSize(event.target.value);
            {/*this.changeFontFamily([fontFamily])*/ }
          }} />
        <br />

        <button className="header_color_button" style={{
          fontSize: '15px',
          borderRadius: '5px',
          backgroundColor: 'white'
        }}
          onClick={() => this.changeBackgroundColor('headerBackground')}>Click To Change Header Color</button>
        <br />
        <button className="font_family_button" style={{
          fontFamily: this.state.currentFont,
          fontSize: '15px',
          borderRadius: '5px',
          backgroundColor: 'white'
        }}
          onClick={() => this.changeCurrentFont()}>Click To Change Font Family</button> {/*this is intended to map through and change font family upon click*/}
        <br />
        <div>Pick A Font Color:
        <input className="font_color_picker"
            type="color"
            value={color}
            onChange={event => this.changeColor(event.target.value)} />
        </div>

        <br />
        <p style={{
          fontSize: `${size}px`,
          color,
          backgroundColor: adviceBackground,
          fontFamily: this.state.currentFont
        }}>{advice}</p>
      </div>
    );
  }
}

export default App;
