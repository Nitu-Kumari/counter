import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { sayHello } from '../actions'

let  Button = ({ whatsUp, stateObject, saySomething }) => (
  <div >
      <button onClick={saySomething}>
          PRESS TO DISPATCH FIRST ACTION
      </button>
      <h2>{Increment}</h2>
      <button onClick={()=> console.log('Redux State:',stateObject)} >
          Press to inspect STATE in console panel
      </button>
    </div>
  )

 
  
       
const mapStateToProps = (state) => ({
  whatsUp: state.say,
  stateObject: state
})
const mapDispatchToProps = (dispatch) => ({
  saySomething: () => { dispatch(sayHello())}
})
Button = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)
export default Button;
