import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      counter:0
    }
  }
  incrementCounter(){
    //we change the state of counter
    // set state
    this.setState({
      counter:this.state.counter +1
    });
  }
  decrementCounter(){
    //change state counter
    this.setState({
      counter:this.state.counter -1
    });
  }
  
    render() {
      return (
        <div className="App">
  <p> {this.state.counter}</p>
          <button onClick={this.incrementCounter.bind(this)}>Increase</button>
          <button onClick={this.decrementCounter.bind(this)}>decrement</button>
  
  
          
        </div>
      );
    }
  }
  
  export default App;
  


