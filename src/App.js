import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import First from './Component/First'
import Main from './Component/Main'



class App extends Component {
  
  constructor(props){
    super(props)
    this.doChange = this.doChange.bind(this)
  }
  
  style = {
    width:"375px",
    margin:"0 auto",
    backgroundColor:"#cef0ff",
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
        <div>
          <p>here is first page</p>
      <button onClick={this.doChange}>main</button>
      <p>{this.props.mode}</p>
      </div>
      )
      break

      case 'main' :
        current_page = (
        <div>
          <p>here is main page</p>
          <button onClick={this.doChange}>click</button>
          <p>{this.props.mode}</p>
        </div>) 
      break
      
      default :
      current_page = (<div><button onClick={this.doChange}>click</button>
        <p>{this.props.mode}</p>
      </div>) 
      
    }
    return <div style={this.style} >
      {current_page}
      <p>App.js</p>
    </div>
  }
}

export default connect ((state)=>state)(App)
