import React, { Component } from 'react';
import {connect} from 'react-redux'
import gire_icon from '../static/gire_icon.svg'
import { SetMain, SetBack, SetStamp, SetDetail, SetName } from './SetParts'

class Setting extends Component{
  constructor(props){
    super(props)
    this.state={
      page:'FIRST',
      backcolor:'',
    }
    this.doAction = this.doAction.bind(this)
    this.doChange = this.doChange.bind(this)
  }
  doAction(page){
    this.setState({
      page:page
    })
  }
  doChange(e){
    let color = e.target.value
    this.setState({
      backcolor:color
    })
  }
  render(){
    let currentPage = ()=> {
      switch(this.state.page){
      case 'FIRST' :
      return  <SetMain onClick={this.doAction} />
      case 'BACK' :
        return  <SetBack onClick={this.doAction} onChange={()=>this.doChange} />
      case 'STAMP' :
        return  <SetStamp onClick={this.doAction} />
      case 'NAME' :
        return  <SetName onClick={this.doAction} />
      case 'DETAIL' :
        return  <SetDetail onClick={this.doAction} />  
      default :
        return  <SetMain onClick={this.doAction} />
    }
  }
    return (
      <div className="set-wrapper">
        <input id="set-input" type="checkbox" checked="checked" />
        <label className="s-back" for="set-input"/>
        <div className="setting">
          <label for="set-input"><img src={gire_icon} className="gire" /></label>
          <div className="setConteiner">
              {currentPage()}
          </div>
        </div>
      </div>
    )
  }
}

export default connect ((state)=>state)(Setting)