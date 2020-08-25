import React, { Component } from 'react';
import {connect} from 'react-redux'
import gire_icon from '../static/gire_icon.svg'
import back_icon from '../static/backsample_1.jpg'

function SetMain(){
  return (
    <div>
      <h2>設定</h2>
      <div className="flex">
        <div>
          <img src={back_icon}/>
          <p>背景を変える</p>
        </div>
        <div>
          <img src={gire_icon}/>
          <p>スタンプを作る</p>
        </div>
        <div>
          <span className='block'>Name</span>
          <p>カードの名前を変える</p>
        </div>
      </div>
      <div>
        <button >詳しい設定</button>
      </div>
    </div>
  )
}

class Setting extends Component{
  render(){
    let currentPage = <SetMain />
    return (
      <div className="set-wrapper">
        <input id="set-input" type="checkbox" />
        <label className="s-back" for="set-input"/>
        <div className="setting">
          <label for="set-input"><img src={gire_icon} className="gire" /></label>
          <div className="setConteiner">
              {currentPage}
          </div>
        </div>
      </div>
    )
  }
}

export default connect ((state)=>state)(Setting)