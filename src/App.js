import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      count:0
    };
  }

  increament = () => {
    this.setState({
      count:this.state.count+1
    });
  }

  decreament = () => {
    this.setState({
      count:this.state.count-1
    });
  }

  render() {
    return (

      <div className="App">

       <button  onClick={this.increament}>+</button>
       <button  onClick={this.decreament}>-</button>

       <h2 center>
        {this.state.count}
       </h2>
      </div>

    );
  }
}

export default App;
