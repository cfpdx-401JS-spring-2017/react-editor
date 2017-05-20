import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: 'WRITE YO NAME HERE',
      color: '#6f5aaa',
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
          <button onClick={() => this.changeColor('ffffff')}>Welcome to the React party!</button>
        <div className="settings">
          <label>
            Name:
            <input
              value={this.state.name}
              onChange={e => this.changeMessage(e.target.value)}/>
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
