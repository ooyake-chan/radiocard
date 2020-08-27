import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import { backAction } from './Store'
import First from './Component/First'
import Main from './Component/Main'

class App extends Component {
  
  constructor(props){
    super(props)
    if(this.props.backcolor === undefined){
      this.state={
        style:{backgroundColor:"#cef0ff",}
      }
    }else{
      let backcolor = this.props.backcolor.slice()
      this.state={
        style:{backgroundColor:backcolor}
      }
    }
    this.colorChange = this.colorChange.bind(this)
    this.doChange = this.doChange.bind(this)
    this.check()
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

  colorChange(color){
    this.setState({
      style:{backgroundColor:color}
    })
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
          <Main colorChange={this.colorChange}/>
        ) 
      break
      
      default :
      current_page = (
      <div>
        <p>no mode</p>
        <p>{this.props.mode}</p>
      </div>) 
      
    }
    return <div style={this.state.style} >
      <button onClick={this.doChange}>click</button>
      {current_page}
    </div>
  }
}

function mappingState(state){
  return {
    backcolor:state.backcolor,
    cardname:state.cardname,
    mode:state.mode,
  }
}

export default connect ((state)=>state)(App)
