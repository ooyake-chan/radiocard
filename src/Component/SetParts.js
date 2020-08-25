import React, { Component } from 'react';
import gire_icon from '../static/gire_icon.svg'
import back_icon from '../static/backsample_1.jpg'

export function SetMain(props){
  return (
    <div>
      <h2>設定</h2>
      <div className="flex">
        <div onClick={()=>props.onClick('BACK')}>
          <img src={back_icon}/>
        <p>背景を変える</p>
        </div>
        <div onClick={()=>props.onClick('STAMP')}>
          <img src={gire_icon}/>
          <p>スタンプを作る</p>
        </div>
        <div onClick={()=>props.onClick('NAME')}>
          <span className='block'>Name</span>
          <p>カードの名前を変える</p>
        </div>
      </div>
      <div>
        <button onClick={()=>props.onClick('DETAIL')}>詳しい設定</button>
      </div>
    </div>
  )
}
export function SetBack(props){
  return (
    <div>
      <h2>背景を変える</h2>
      <div className="flex">
        <div onClick={()=>props.onClick('BACK')}>
          <img src={back_icon}/>
          <p>色を選択</p>
        </div>
        <div onClick={()=>props.onClick('STAMP')}>
          <img src={gire_icon}/>
          <p>画像を変える</p>
        </div>
        <div onClick={()=>props.onClick('NAME')}>
          <span className='block'>Name</span>
          <p>全体/一部の切り替え</p>
        </div>
      </div>
      <div>
        <button onClick={()=>props.onClick('FIRST')}>もどる</button>
      </div>
    </div>
  )
}
export function SetStamp(props){
  return (
    <div>
      <h2>スタンプを作る</h2>
      <div className="flex">
        <div onClick={()=>props.onClick('BACK')}>
          <img src={back_icon}/>
          <p>スタンプ1</p>
        </div>
        <div onClick={()=>props.onClick('STAMP')}>
          <img src={gire_icon}/>
          <p>スタンプ2</p>
        </div>
        <div onClick={()=>props.onClick('NAME')}>
          <span className='block'>Name</span>
          <p>スタンプ3</p>
        </div>
      </div>
      <div>
        <button onClick={()=>props.onClick('FIRST')}>もどる</button>
      </div>
    </div>
  )
}

export function SetName(props){
  return (
    <div>
      <h2>カードの名前を変える</h2>
      <div className="flex">
        <div onClick={()=>props.onClick('BACK')}>
          <img src={back_icon}/>
          <button>変更する</button>
        </div>
        <div onClick={()=>props.onClick('STAMP')}>
          <img src={gire_icon}/>
          <p>文字の色を選択</p>
        </div>
      </div>
      <div>
        <button onClick={()=>props.onClick('FIRST')}>もどる</button>
      </div>
    </div>
  )
}

export function SetDetail(props){
  return (
    <div>
      <h2>詳しい設定</h2>
      <div className="flex">
        <div onClick={()=> props.onClick('NAME')}>
          <span className='block'>17</span>
          <p>日付あり/なし</p>
        </div>
        <div onClick={()=> props.onClick('NAME')}>
          <span className='block'>How</span>
          <p>使い方</p>
        </div>
        <div onClick={()=> props.onClick('NAME')}>
          <span className='block'>En</span>
          <p>English</p>
        </div>
        <div onClick={()=> props.onClick('NAME')}>
          <span className='block'>!</span>
          <p>リセット</p>
        </div>
      </div>
      <div>
        <button onClick={()=> props.onClick('FIRST')}>もどる</button>
      </div>
    </div>
  )
}