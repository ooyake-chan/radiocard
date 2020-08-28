import React, { Component } from 'react';
import {connect} from 'react-redux'

class Modal extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return <div id={this.props.id} className="modal_wrapper">
        <a className="mBack" href="#!"></a>
        <div className="modal">
          <h1 style={this.props.style}>{this.props.name}</h1>
          <div className="mBody">{this.props.body}</div>
        </div>
    </div>
  }
}

export default connect((state)=>state)(Modal)