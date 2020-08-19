import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import First from './Component/First'
import Main from './Component/Main'



class App extends Component {
  constructor(props){
    super(props)
    alert(this.props.mode)
    this.doChange = this.doChange.bind(this)
  }
  
  doChange(e){
    if(e.shiftKey){
      this.props.dispatch({type:'MAIN'})
    }else{
      this.props.dispatch({type:'FIRST'})
    }
}
  render(){
    let current_page
    switch(this.props.mode){
      case 'FIRST' :
      current_page = (
        <div>
          <p>here is first page</p>
      <button onClick={this.doChange}>main</button>
      <p>{this.props.mode}</p>
      </div>
      )
      break

      case 'MAIN' :
      current_page = (<div>here is the main page</div>) 
      break
      
      default :
      current_page = (<div>some error</div>) 
      
    }
    return <div>
      {current_page}
      <p>App.js</p>
    </div>
  }
}

export default connect ((state)=>state)(App)
