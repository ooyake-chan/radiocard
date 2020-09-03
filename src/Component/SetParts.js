import React, { Component } from 'react';
import Modal from './Modal'
import gire_icon from '../static/gire_icon.svg'
import back_icon from '../static/backsample_1.jpg'

export const stamp = [
  require('../static/stamp_cake.svg'),
  require('../static/stamp_che.svg'),
  require('../static/stamp_chekin.svg'),
  require('../static/stamp_rose.svg'),
  require('../static/stamp_sun.svg'),
  require('../static/stamp_good.svg')
]
const img ={
  gire:require('../static/gire_icon.svg'),
  good:require('../static/stamp_good.svg'),
  download:require('../static/download_icon.png'),
  part:require('../static/switch_part.svg'),
  cover:require('../static/switch_cover.svg'),
}

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
          <img src={img.good}/>
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
        <div>
          <img src={img.download} className="notCircle"/><br/>
          <a href="#img_up_modal">画像を変える</a>
        </div>
        <div onClick={()=>props.bgSwitch()}>
          {props.bgmode ?
          <img src={img.cover} className="notCircle switch"/> :
          <img src={img.part} className="notCircle switch"/>
          }<br/>
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
        <div onClick={()=> props.getStamp(0)}>
          <img src={stamp[0]}/>
          <p>スタンプ1</p>
        </div>
        <div onClick={()=> props.getStamp(1)}>
          <img src={stamp[1]}/>
          <p>スタンプ2</p>
        </div>
        <div onClick={()=> props.getStamp(2)}>
          <img src={stamp[2]}/>
          <p>スタンプ3</p>
        </div>
        <div onClick={()=> props.getStamp(3)}>
          <img src={stamp[3]}/>
          <p>スタンプ4</p>
        </div>
        <div onClick={()=> props.getStamp(4)}>
          <img src={stamp[4]}/>
          <p>スタンプ5</p>
        </div>
        <div onClick={()=> props.getStamp(5)}>
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
        <div className="center">
          <input type="text" id="nameform" placeholder="新しい名前を入力"/><br/>
          <button onClick={props.nameChange()} className="yel_btn">変更する</button>
        </div>
        <div className="center">
        <input type="color" value="#434343" onChange={props.fontChange()}/>
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
    <div className="setdetail">
      <h2>詳しい設定</h2>
      <div className="flex">
        <div onClick={()=> props.daySwitch()}>
          <span className='block'>17</span>
          {props.daymode ?
          <p>日付あり/<span>なし</span></p>:
          <p>日付<span>あり</span>/なし</p>
          }
        </div>
        <div onClick={()=> props.howtoPage()}>
          <span className='block'>How</span>
          <p>使い方</p>
        </div>
        <div onClick={()=> props.pageChange('NAME')}>
          <span className='block'>En</span>
          <p>English</p>
        </div>
        <div>
          <span className='block setreset'>!</span>
          <a href="#reset_modal">リセット</a>
        </div>
      </div>
      <div>
        <button onClick={()=> props.pageChange('FIRST')}>もどる</button>
      </div>
    </div>
  )
}