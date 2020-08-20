import React, { Component } from 'react';
import {connect} from 'react-redux'

class Main extends Component{
  constructor(props){
    super(props)
  }
  render (){
    let backImg = "../static/"+this.props.back.img
    return <div>
      <div>
        <div>
          <h1>{this.props.cardname}</h1>
          <img src={backImg} />
        </div>
      </div>
    </div>
  }
}

export default connect((state)=>state)(Main)