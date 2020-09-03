import React, { Component } from 'react';
import {connect} from 'react-redux'
import Modal from '../Component/Modal'
import{ nameAction } from '../Store'

const img = {
  twitter:require('../static/twitter-brands.svg'),
  github:require('../static/github-brands.svg'),
}

export function About(props){
    return( <div>
      <div className="about_table">
        <h1>アプリの詳細</h1>
        <p>このアプリはベータ版です。というかReactの練習に作ったものなので色々と大目に見てください。アプリのデータが消えてしまう等の事故に関しても責任は負えません。</p>
        <hr/>
        <h2>作った人</h2>
        <div className="flex">
          <p>公（Ooyake）</p>
          <img src={img.twitter}/>
        </div>
        <hr/>
        <div className="flex">
          <p>githubでソースコードを公開しています</p>
          <img src={img.github}/>
        </div>
        <hr/>
        <h2>使用素材</h2>
        <a>写真AC</a><br/>
        <a>Icoon</a><br/>
        <a>FontAwsome</a><br/>
        <a className="blue_btn" onClick={()=> props.modeAction('main')}>前の画面にもどる</a>
      </div>
    </div>)
}