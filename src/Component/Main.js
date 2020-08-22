import React, { Component } from 'react';
import {connect} from 'react-redux'
import Stamps from './Stamp'
import Img from '../static/backsample_1.jpg'

class Main extends Component{
  constructor(props){
    super(props)
  }

  render (){
    let d = new Date()
    let date = d.getFullYear()+'ねん' + (1+ d.getMonth()) + 'がつ'
    return <main>
      <div className="main">
        <div className="img_wrapper">
          <h1>{this.props.cardname}</h1>
          <img src={Img}/>
          <h2>{date}</h2>
        </div>
        <Stamps />
      </div>
    </main>
  }
}

function mappingState(state){
  return{
    cardname:state.cardname,
  }
}

export default connect(mappingState)(Main)