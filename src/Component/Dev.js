import React, { Component } from 'react';
import {connect} from 'react-redux'

class Dev extends Component{
  constructor(props){
    super(props)
  }
  
  render(){
    let current_page
    current_page = (<p>{this.props.mode}</p>)
    return <div>
      <button onClick={this.props.dispatch({type:'FIRST'})}>first</button>
      <button onClick={this.props.dispatch({type:'MAIN'})}>main</button>
      <button onClick={this.props.dispatch({type:'HOW'})}>How</button>
      {current_page}
    </div>
  }
}

export default connect((state)=>state)(Dev)