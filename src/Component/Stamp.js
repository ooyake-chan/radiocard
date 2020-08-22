import React, { Component } from 'react';
import {connect} from 'react-redux'
import { stampAction } from '../Store'
import image from '../static/stamp_cake.svg'

class Stamp extends Component{
  constructor(props){
    super(props)
  }
  style = {
    backgroundImage:image,
  }
  render(){
  let img = (<img src={image}/>)
  return( 
  <button className="stamp" onClick={this.props.onClick} style={this.style}>
  {this.props.check ? img : ''}
  </button>)
  }
}

class Stamps extends Component{
  constructor(props){
    super(props)
    if(this.props.stampcheck === undefined){
      this.state = {
        stampcheck : []
      }
    }else{
      this.state = {
        stampcheck : this.props.stampcheck.slice()
      }
    }
    this.doAction = this.doAction.bind(this)
  }

  doAction(i){
    let check = this.state.stampcheck
    check[i] = check[i] ? false : true
    this.setState({stampcheck:check})
    let action = stampAction(this.state.stampcheck)
    this.props.dispatch(action)
  }

  renderStamp(){
    let s = []
    for(let i=0; i<=4; i++){
     s.push(<Stamp key={i} check={this.state.stampcheck[i]} onClick={()=>this.doAction(i)}/>)
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
function mappingState(state){
  return{
    stampcheck:state.stampcheck,
    mode:state.mode
  }
}

export default connect((state)=>state)(Stamps)