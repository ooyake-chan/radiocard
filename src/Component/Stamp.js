import React, { Component } from 'react';
import {connect} from 'react-redux'
import { stampAction } from '../Store'

const stamp = [
  require('../static/stamp_good.svg'),
  require('../static/stamp_che.svg'),
  require('../static/stamp_chicken.svg'),
  require('../static/stamp_rose.svg'),
  require('../static/stamp_sun.svg'),
  require('../static/stamp_cake.svg'),
]
const teststamp = [
  require('../static/stamp_good.png'),
  require('../static/stamp_che.png'),
  require('../static/stamp_chicken.png'),
  require('../static/stamp_rose.png'),
  require('../static/stamp_sun.png'),
  require('../static/stamp_cake.png'),
]

class Stamp extends Component{
  constructor(props){
    super(props)
  }
  render(){
  let img = (<img src={teststamp[this.props.index]}/>)
  return( 
    <div className="stampwrap">
      <button className="stamp" onClick={this.props.onClick}>
      {this.props.check ? img : ''}
      </button>
  {this.props.daymode ? '' : <p>{this.props.day}</p>}
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
    let index = this.props.stampIndex
    let daymode = this.props.daymode
    for(let i=0; i<=30; i++){
     s.push(
      <Stamp 
          key={i} 
          day={i+1}
          check={this.state.stampcheck[i]}
          index={index} 
          onClick={()=>this.doAction(i)}
          daymode={daymode}
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