import React, { Component } from 'react';
import {connect} from 'react-redux'
import { stampAction } from '../Store'

const stamp = [
  require('../static/stamp_cake.svg'),
  require('../static/stamp_che.svg'),
  require('../static/stamp_chekin.svg'),
  require('../static/stamp_rose.svg'),
  require('../static/stamp_sun.svg'),
  require('../static/stamp_good.svg'),
]

class Stamp extends Component{
  constructor(props){
    super(props)
  }
  
  render(){
  let img = (<img src={stamp[0]}/>)
  return( 
    <div className="stampwrap">
      <button className="stamp" onClick={this.props.onClick}>
      {this.props.check ? img : ''}
      </button>
  <p>{this.props.day}</p>
  </div>)
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
    this.setState({
      stampcheck:check
    })
    let action = stampAction(this.state.stampcheck)
    this.props.dispatch(action)
  }

  renderStamp(){
    let s = []
    for(let i=0; i<=30; i++){
     s.push(
      <Stamp 
          key={i} 
          day={i+1}
          check={this.state.stampcheck[i]} 
          onClick={()=>this.doAction(i)}
        />)
    }
    return (s)
  }

  render(){
    let stamps = this.renderStamp()
    return(
      <div className="stamps">
        
          {stamps}

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