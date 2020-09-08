import React, { Component } from 'react';

export const stamp = [
  require('../static/stamp_good.svg'),
  require('../static/stamp_che.svg'),
  require('../static/stamp_chekin.svg'),
  require('../static/stamp_rose.svg'),
  require('../static/stamp_sun.svg'),
  require('../static/stamp_cake.svg')
]
export const teststamp = [
  require('../static/stamp_good.png'),
  require('../static/stamp_che.png'),
  require('../static/stamp_chi.png'),
  require('../static/stamp_rose.png'),
  require('../static/stamp_sun.png'),
  require('../static/stamp_cake.png')
]
const img ={
  gear:require('../static/gear.png'),
  good:require('../static/stamp_good.png'),
  download:require('../static/download_icon.png'),
  part:require('../static/switch_part.svg'),
  cover:require('../static/switch_cover.svg'),
}

export function SetMain(props){
  return (
    <div>
      <h2>設定</h2>
      <div className="flex">
        <div onClick={()=>props.pageChange('BACK')} className="cursor">
          <img src={props.backimage}/>
        <p>背景を変える</p>
        </div>
        <div onClick={()=>props.pageChange('STAMP')} className="cursor">
          <img src={teststamp[props.stampIndex]}/>
          <p>スタンプを変える</p>
        </div>
        <div onClick={()=>props.pageChange('NAME')} className="cursor">
          <span className='block'>Name</span>
          <p>カードの名前を変える</p>
        </div>
        <div onClick={()=>props.pageChange('DETAIL')} className="cursor">
          <span className='block'>Detail</span>
          <p>詳しい設定</p>
        </div>
      </div>
      <div>
        {props.close_btn}
      </div>
    </div>
  )
}
export function SetBack(props){
  return (
    <div>
      <h2>背景を変える</h2>
      <div className="flex">

        <div className="cursor">
            <div className="input_conteiner">
              <input id="colorPic" type="color" value={props.backcolor} onChange={props.colorChange()} className="input_color"/>
            </div>
            <label for="colorPic">背景の色を選択</label>
        </div>

        <div className="cursor">
          <img src={props.backimage} className="notCircle"/><br/>
          <a href="#img_up_modal">画像を変える</a>
        </div>
        <div onClick={()=>props.bgSwitch()} className="cursor">
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
        <div onClick={()=> props.getStamp(0)} className="cursor">
          <img src={teststamp[0]}/>
          <p>スタンプ1</p>
        </div>
        <div onClick={()=> props.getStamp(1)} className="cursor">
          <img src={teststamp[1]}/>
          <p>スタンプ2</p>
        </div>
        <div onClick={()=> props.getStamp(2)} className="cursor">
          <img src={teststamp[2]}/>
          <p>スタンプ3</p>
        </div>
        <div onClick={()=> props.getStamp(3)} className="cursor">
          <img src={teststamp[3]}/>
          <p>スタンプ4</p>
        </div>
        <div onClick={()=> props.getStamp(4)} className="cursor">
          <img src={teststamp[4]}/>
          <p>スタンプ5</p>
        </div>
        <div onClick={()=> props.getStamp(5)} className="cursor">
          <img src={teststamp[5]}/>
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
    <div className="set_name">
      <h2>カードの名前を変える</h2>
      <div className="flex">
        <div className="center">
          <input id="nameform" type="text" placeholder="新しい名前を入力"/><br/>
          <button onClick={props.nameChange()} className="yel_btn">変更する</button>
        </div>
        
        <div className="cursor">
          <div className="input_conteiner">
            <input id="fontColor" type="color" value={props.fontcolor} onChange={props.fontChange()} className="input_color"/>
          </div>
          <label for="fontColor">文字の色を選択</label>
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
        <div onClick={()=> props.daySwitch()} className="cursor">
          <span className='block'>17</span>
          {props.daymode ?
          <p>日付あり/<span>なし</span></p>:
          <p>日付<span>あり</span>/なし</p>
          }
        </div>
        <div onClick={()=> props.howtoPage()} className="cursor">
          <span className='block'>How</span>
          <p>使い方</p>
        </div>
        <div onClick={()=> props.pageChange('NAME')} className="cursor">
          <span className='block'>En</span>
          <p>English</p>
        </div>
        <div className="cursor">
          <span className='block setreset'>!</span><br/>
          <a href="#reset_modal">リセット</a>
        </div>
      </div>
      <div>
        <button onClick={()=> props.pageChange('FIRST')}>もどる</button>
      </div>
    </div>
  )
}