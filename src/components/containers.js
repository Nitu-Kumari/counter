

import React from 'react'
import { connect } from 'react-redux'
import { counter } from '../actions'


let  Button = ({ Increment, stateObject, Decrement}) => (
    <div >
        <button onClick={Decrement}>
            PRESS TO DISPATCH FIRST ACTION
        </button>
        <h2>{Increment}</h2>
        <button onClick={()=> console.log('Redux State:',stateObject)} >
            Press to inspect STATE in console panel
        </button>
      </div>
    )
    const mapStateToProps = (state) => ({
      Increment: state.increase,
      stateObject: state
    })
    const mapDispatchToProps = (dispatch) => ({
      Decrement: () => { dispatch(Counter())}
    })
    Button = connect(
      mapStateToProps,
      mapDispatchToProps
    )(Button)
    export default Button;