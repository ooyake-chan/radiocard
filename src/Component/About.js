import React, { Component } from 'react';
import{ Twitter, Github, Facebook, Line } from '../static/image'

export function About(props){
    return( <div className="about">
      <div className="about_table">
        <h1>アプリの詳細</h1>
        <p>このアプリはベータ版です。というかReactの練習に作ったものなので色々と大目に見てください。</p>
        <hr/>
        <h2>作った人</h2>
        <div className="flex">
          <p>公（Ooyake）</p>
          <a href="https://twitter.com/OOyake_" target="_blank"><Twitter /></a>
        </div>
        <hr/>
        <div className="flex">
          <p className="git">githubでソースコードを公開しています</p>
          <a href="https://github.com/ooyake-chan/radiocard" target="_blank"><Github /></a>
        </div>
        <hr/>
        <h2>使用素材</h2>
        <a href="https://www.photo-ac.com/?gclid=CjwKCAjwqML6BRAHEiwAdquMnQZGGmN4ye2uqxERH7r1FFrfHV9k2xHbGVZsm55Ap-BTdoIDw-vZdRoCPZ0QAvD_BwE" target="_blank">写真AC</a><br/>
        <a href="https://icooon-mono.com/" target="_blank">ICOON MONO</a><br/>
        <hr/>
        <h2>シェア</h2>
        <a target="blank" href="https://twitter.com/intent/tweet?url=[http://ooyakecyan.html.xdomain.jp/cardapp/index.html]&text=[スタンプカードapp]"><Twitter /></a>
        <a target="blank" href="https://www.facebook.com/sharer/sharer.php?u=[http://ooyakecyan.html.xdomain.jp/cardapp/index.html]"><Facebook /></a>
        <a target="blank" href="http://line.me/R/msg/text/?[スタンプカードapp]/n[http://ooyakecyan.html.xdomain.jp/cardapp/index.html]"><Line /></a>

        <div className="center">
          <a className="blue_btn" onClick={()=> props.modeAction('HOW')}>前の画面にもどる</a>
        </div>
      </div>
    </div>)
}