import React, { Component } from 'react';
import {connect} from 'react-redux'
import { currentStampAction } from '../Store'
import Stamps from './Stamp'
import Setting from './Setting'
import Img from '../static/backsample_1.jpg'

class Main extends Component{
  constructor(props){
    super(props)
    this.state = {
      style:{color:this.props.fontcolor}
    }
    this.stampChange = this.stampChange.bind(this)
    this.fontChange = this.fontChange.bind(this)
  }

  stampChange(stampIndex){
    let Index = stampIndex
    let action = currentStampAction(Index)
    this.props.dispatch(action)
  }

  fontChange(color){
    this.setState({
      style:{color:color}
    })
  }
  
  render (){
    let d = new Date()
    let date = d.getFullYear()+'ねん' + (1+ d.getMonth()) + 'がつ'
    let colorChange = this.props.colorChange
    let stampChange = this.stampChange
    let fontChange = this.fontChange
    return <main style={this.state.style}>
      <div className="main">
        <div className="img_wrapper">
          <h1>{this.props.cardname}</h1>
          <img src={Img}/>
          <h2>{date}</h2>
        </div>
        <Stamps />
      </div>
        <Setting colorChange={colorChange} stampChange={stampChange} fontChange={fontChange}/>
    </main>
  }
}

function mappingState(state){
  return{
    cardname:state.cardname,
    stampcheck:state.stampcheck,
  }
}

export default connect((state)=>state)(Main)