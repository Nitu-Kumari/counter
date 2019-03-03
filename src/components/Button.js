   
   import React, { Component } from 'react';

   
   
   
   
   
   class Counter extends Component {

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
            <Button onClick={this.incrementCounter.bind(this)}>Increase</Button>
            <Button onClick={this.decrementCounter.bind(this)}>decrement</Button>
    
    
            
          </div>
        );
      }
    }
    
    export default Counter;
    