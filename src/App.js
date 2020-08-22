import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import First from './Component/First'
import Main from './Component/Main'

class App extends Component {
  
  constructor(props){
    super(props)
    this.doChange = this.doChange.bind(this)
    this.check()
  }
  style = {
    backgroundColor:"#cef0ff",
  }

  check(){
    if(this.props.cardname !== undefined && this.props.cardname !== ""){
      this.props.dispatch({type:'MAIN'})
    }else{
      this.props.dispatch({type:'FIRST'})
    }
  }

  doChange(){
    if(this.props.mode == 'first'){
      this.props.dispatch({type:'MAIN'})
    }else{
      this.props.dispatch({type:'FIRST'})
    }
}

  render(){
    let current_page
    switch(this.props.mode){
      case 'first' :
      current_page = (
          <First />
      )
      break

      case 'main' :
        current_page = (
          <Main />
        ) 
      break
      
      default :
      current_page = (
      <div>
        <p>no mode</p>
        <p>{this.props.mode}</p>
      </div>) 
      
    }
    return <div style={this.style} >
      {current_page}
      <button onClick={this.doChange}>click</button>
    </div>
  }
}

function mappingState(state){
  return {
    cardname:state.cardname,
    mode:state.mode,
  }
}

export default connect (mappingState)(App)
