import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: 'WRITE YO NAME HERE',
      color: '#6f5aaa',
      title: 'Welcome to my React Party!'
    };
    
  }

  changeTitle(title) {
    this.setState({ title });
  }

  changeMessage(name) {
    this.setState({ name });
  }

  changeColor(color) {
    this.setState({ color });
  }

  render() {


    return (
      <div className="editor">
          <h2>Welcome to the React party!</h2>
        <div className="settings">
          <label>
            Name:
            <input
              value={this.state.name}
              onChange={e => this.changeMessage(e.target.value)}/>
          </label>
          <label>
            Title:
            <input
            value={this.state.message}
            onChange={e => this.changeTitle(e.target.value)}/>
          </label>
          <label>
            Color:
            <input
              type="color"
              value={this.state.color}
              onChange={e => this.changeColor(e.target.value)}/>
          </label>
        </div>
        <div className="display"
          style={{ color: this.state.color }}>
          {this.state.name} <br></br>
          {this.state.title}
      </div>
    </div>
    );
  }
}

export default App;
