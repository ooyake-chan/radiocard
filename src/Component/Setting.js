import React, { Component } from 'react';
import {connect} from 'react-redux'
import gire_icon from '../static/gire_icon.svg'
import { backAction, fontAction, nameAction } from '../Store'
import { SetMain, SetBack, SetStamp, SetDetail, SetName, stamp } from './SetParts'

const img ={
  gire:require('../static/gire_icon.svg'),
  good:require('../static/stamp_good.svg'),
}


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
    this.fontChange = this.fontChange.bind(this)
    this.nameChange = this.nameChange.bind(this)
    this.bgSwitch = this.bgSwitch.bind(this)
    this.daySwitch = this.daySwitch.bind(this)
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
     this.props.stampChange(index)
   }

   fontChange(e){
     let color = e.target.value
     let action = fontAction(color)
     this.props.dispatch(action)
     this.props.fontChange(color)
   }

   nameChange(){
     let target = document.getElementById("nameform")
     let name = target.value
     let action = nameAction(name)
     console.log(action)
     this.props.dispatch(action)
   }

   bgSwitch(){
    this.props.dispatch({type:'BGSWITCH'})
  }
   daySwitch(){
    this.props.dispatch({type:'DAYSWITCH'})
  }

  render(){
    let bgmode = this.props.bgmode
    let daymode = this.props.daymode
    let currentPage = ()=> {
      switch(this.state.page){
      case 'FIRST' :
      return  <SetMain pageChange={this.pageChange} />
      case 'BACK' :
        return  (
        <SetBack 
        pageChange={this.pageChange} 
        colorChange={()=>this.colorChange} 
        bgSwitch={this.bgSwitch}
        bgmode={bgmode}
        />)
      case 'STAMP' :
        return  <SetStamp pageChange={this.pageChange} getStamp={this.getStamp}/>
      case 'NAME' :
        return  <SetName 
        pageChange={this.pageChange} 
        fontChange={()=>this.fontChange}
        nameChange={()=>this.nameChange}
        />
      case 'DETAIL' :
        return  (
        <SetDetail 
        pageChange={this.pageChange}
        daySwitch={this.daySwitch}
        daymode={daymode}
        reset={this.reset}
        />)  
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