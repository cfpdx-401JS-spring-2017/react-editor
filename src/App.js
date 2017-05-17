import React, { Component } from 'react';
// import Killa from './realkilla';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      size: props.size,
      message: props.message,
      color: '#114B5F'
    };
  }

  setSize(size) {
    this.setState({ size });
  }

  setColor(color){
    this.setState({color});
  }

  setMessage(message){
    this.setState({message});
  }

  render() {
    let {size, color, message} = this.state;

    return (
      <div className="App"
      style={{
          backgroundColor: `#${color}`
      }}>
      <p id="blahblah"style={{
                    fontSize: `${size}px`,
                }}>
                {message}
          </p>
        <button onClick={e => {
          for(let i = 0; i < 25; i++){
            setTimeout( () => { 
              this.setSize(i * 3);
            }, 25 * i);
          }
        }}>Click Me</button>
          <select className="DropDown" name="mydropdown" onChange={(e) => this.setColor(e.target.value)}>
            <option value="fff">White</option>
            <option value="114B5F">Midnight Green Eagle</option>
            <option value="76F7BF">Aquamarine</option>
            <option value="5FDD9D">medium aquamarine</option>
            <option value="FFF275">Sunny</option>
            <option value="FF6663">Pastel red</option>
          </select>
          <form autocomplete="off">
            <input className="TextBox"  type="text" autocomplete="off" name="lname" placeholder="enter a message" onInput={ e => this.setMessage(e.target.value)}/>
          </form>
      </div>
    );
  }
}

export default App;