import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import { backAction } from './Store'
import First from './Component/First'
import Main from './Component/Main'
import { About } from './Component/About'

class App extends Component {
  
  constructor(props){
    super(props)
    this.colorChange = this.colorChange.bind(this)
    this.doChange = this.doChange.bind(this)
    this.modeAction = this.modeAction.bind(this)
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

  modeAction(mode){
    this.props.dispatch({type:mode})
  }

  colorChange(color){
    this.setState({
      style:{backgroundColor:color}
    })
  }


  render(){
    let bgColor = {backgroundColor:this.props.backcolor}
    let bgImg = {
      backgroundImage:"url("+this.props.image+")",
      backgroundSize:"cover",
    }
    let style
    style = this.props.bgmode ? bgImg : bgColor

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

      case 'how' :
        current_page = (
          <First />
        ) 
      break

      case 'about' :
        current_page = (
          <About modeAction={this.modeAction}/>
        ) 
      break
      
      default :
      current_page = (
      <div>
        <p>no mode</p>
        <p>{this.props.mode}</p>
      </div>) 
      
    }
    return <div style={style} >
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
