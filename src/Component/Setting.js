import React, { Component } from 'react';
import {connect} from 'react-redux'
import gire_icon from '../static/gire_icon.svg'
import { backAction, currentStampAction } from '../Store'
import { SetMain, SetBack, SetStamp, SetDetail, SetName } from './SetParts'

class Setting extends Component{
  constructor(props){
    super(props)
    this.state={
      page:'FIRST',
      backcolor:'',
    }
    this.pageChange = this.pageChange.bind(this)
    this.colorChange = this.colorChange.bind(this)
    this.getStamp = this.getStamp.bind(this)
  }

  pageChange(page){
    this.setState({
      page:page
    })
  }

  colorChange(e){
    let color = e.target.value
    let action = backAction(color)
    this.props.dispatch(action)
    this.props.colorChange(color)
   }

   getStamp(i){
     let index = i
     console.log(index)
     this.props.stampChange(index)
   }

  render(){
    let currentPage = ()=> {
      switch(this.state.page){
      case 'FIRST' :
      return  <SetMain pageChange={this.pageChange} />
      case 'BACK' :
        return  <SetBack pageChange={this.pageChange} colorChange={()=>this.colorChange} />
      case 'STAMP' :
        return  <SetStamp pageChange={this.pageChange} getStamp={this.getStamp}/>
      case 'NAME' :
        return  <SetName pageChange={this.pageChange} />
      case 'DETAIL' :
        return  <SetDetail pageChange={this.pageChange} />  
      default :
        return  <SetMain pageChange={this.pageChange} />
    }
  }
    return (
      <div className="set-wrapper">
        <input id="set-input" type="checkbox" />
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