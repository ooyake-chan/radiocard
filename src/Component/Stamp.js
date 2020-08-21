import React, { Component } from 'react';
import {connect} from 'react-redux'

function Stamp(props){
  return( 
  <button className="stamp" onClick={props.onClick}>
    {props.value}
  </button>)
}

class Stamps extends Component{
  constructor(props){
    super(props)
    this.state = {
      on:false
    }
    this.doAction = this.doAction.bind(this)
  }
  renderStamp(){
    let s = []
    for(let i=0; i<=31; i++){
     s.push(<Stamp key={i} onClick={this.doAction} value={this.state.on ? '★' : ''}/>)
    }
    return (s)
  }
  doAction(){
    this.setState({
      on:!this.state.on
    })
  }

  render(){
    return(
      <div>
        {this.renderStamp()}
    </div>
      
    )
  }
}

export default connect()(Stamps)