import React, { Component } from 'react';
import gire_icon from '../static/gire_icon.svg'
import back_icon from '../static/backsample_1.jpg'

let stamp1 = require('../static/stamp_cake.svg')
let stamp2 = require('../static/stamp_che.svg')
let stamp3 = require('../static/stamp_chekin.svg')
let stamp4 = require('../static/stamp_rose.svg')
let stamp5 = require('../static/stamp_sun.svg')
let stamp6 = require('../static/stamp_good.svg')
const stamp = [
  stamp1,
  stamp2,
  stamp3,
  stamp4,
  stamp5,
  stamp6,  
]

export function SetMain(props){
  return (
    <div>
      <h2>設定</h2>
      <div className="flex">
        <div onClick={()=>props.pageChange('BACK')}>
          <img src={back_icon}/>
        <p>背景を変える</p>
        </div>
        <div onClick={()=>props.pageChange('STAMP')}>
          <img src={gire_icon}/>
          <p>スタンプを変える</p>
        </div>
        <div onClick={()=>props.pageChange('NAME')}>
          <span className='block'>Name</span>
          <p>カードの名前を変える</p>
        </div>
      </div>
      <div>
        <button onClick={()=>props.pageChange('DETAIL')}>詳しい設定</button>
      </div>
    </div>
  )
}
export function SetBack(props){
  return (
    <div>
      <h2>背景を変える</h2>
      <div className="flex">
        <div>
        <input type="color" value="#cef0ff" onChange={props.colorChange()}/>
          <p>色を選択</p>
        </div>
        <div onClick={()=>props.pageChange('STAMP')}>
          <img src={gire_icon}/>
          <p>画像を変える</p>
        </div>
        <div onClick={()=>props.pageChange('NAME')}>
          <span className='block'>Name</span>
          <p>全体/一部の切り替え</p>
        </div>
      </div>
      <div>
        <button onClick={()=>props.pageChange('FIRST')}>もどる</button>
      </div>
    </div>
  )
}
export function SetStamp(props){
  return (
    <div>
      <h2>スタンプを変える</h2>
      <div className="flex">
        <div onClick={props.stampChange('testmessage')}>
          <img src={stamp[0]}/>
          <p>スタンプ1</p>
        </div>
        <div onClick={props.stampChange(1)}>
          <img src={stamp[1]}/>
          <p>スタンプ2</p>
        </div>
        <div onClick={props.stampChange(2)}>
          <img src={stamp[2]}/>
          <p>スタンプ3</p>
        </div>
        <div onClick={props.stampChange(3)}>
          <img src={stamp[3]}/>
          <p>スタンプ4</p>
        </div>
        <div onClick={props.stampChange(4)}>
          <img src={stamp[4]}/>
          <p>スタンプ5</p>
        </div>
        <div onClick={props.stampChange(5)}>
          <img src={stamp[5]}/>
          <p>スタンプ6</p>
        </div>
      </div>
      <div>
        <button onClick={()=>props.pageChange('FIRST')}>もどる</button>
      </div>
    </div>
  )
}

export function SetName(props){
  return (
    <div>
      <h2>カードの名前を変える</h2>
      <div className="flex">
        <div onClick={()=>props.pageChange('BACK')}>
          <img src={back_icon}/>
          <button>変更する</button>
        </div>
        <div onClick={()=>props.pageChange('STAMP')}>
          <img src={gire_icon}/>
          <p>文字の色を選択</p>
        </div>
      </div>
      <div>
        <button onClick={()=>props.pageChange('FIRST')}>もどる</button>
      </div>
    </div>
  )
}

export function SetDetail(props){
  return (
    <div>
      <h2>詳しい設定</h2>
      <div className="flex">
        <div onClick={()=> props.pageChange('NAME')}>
          <span className='block'>17</span>
          <p>日付あり/なし</p>
        </div>
        <div onClick={()=> props.pageChange('NAME')}>
          <span className='block'>How</span>
          <p>使い方</p>
        </div>
        <div onClick={()=> props.pageChange('NAME')}>
          <span className='block'>En</span>
          <p>English</p>
        </div>
        <div onClick={()=> props.pageChange('NAME')}>
          <span className='block'>!</span>
          <p>リセット</p>
        </div>
      </div>
      <div>
        <button onClick={()=> props.pageChange('FIRST')}>もどる</button>
      </div>
    </div>
  )
}