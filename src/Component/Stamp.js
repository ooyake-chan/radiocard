import React, { Component } from 'react';
import {connect} from 'react-redux'
import image from '../static/stamp_cake.svg'

class Stamp extends Component{
  constructor(props){
    super(props)
    this.state = {
      on:false
    }
    this.doAction = this.doAction.bind(this)
  }
  style = {
    backgroundImage:image,
  }

  doAction(){
    this.setState({
      on:!this.state.on
    })
  }

  render(){
  let img = (<img src={image}/>)
  return( 
  <button className="stamp" onClick={this.doAction} style={this.style}>
  {this.state.on ? img : ''}
  </button>)
  }
}

class Stamps extends Component{
  renderStamp(){
    let s = []
    for(let i=0; i<=31; i++){
     s.push(<Stamp key={i} />)
    }
    return (s)
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