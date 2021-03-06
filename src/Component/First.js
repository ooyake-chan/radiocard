import React, { Component } from 'react';
import {connect} from 'react-redux'
import Modal from '../Component/Modal'
import{ nameAction } from '../Store'
import { image } from '../static/image'


class First extends Component{
  constructor(props){
    super(props)
    this.state = {
      name:'名前をにゅうりょくしてね'
    }
    this.doChange = this.doChange.bind(this)
    this.doAction = this.doAction.bind(this)
    this.modeAction = this.modeAction.bind(this)
    this.ripple = this.ripple.bind(this)
  }
  doChange(e){
    this.setState({
      name:e.target.value
    })
  }
  doAction(e){
    e.preventDefault()
    let action = nameAction(this.state.name)
    this.props.dispatch(action)
  }

  ripple(e){
    e.currentTarget.insertAdjacentHTML('afterbegin', '<span class="ripple" style="left:' + e.pageX + 'px;top:' + e.pageY + 'px;"></span>')
  }

  mode(){
    if(this.props.mode === 'first'){
      return true
    }else{
      return false
    }
  }

  modeAction(mode){
    if(mode === 'main'){
      this.props.dispatch({type:'MAIN'})
    }else if(mode === 'about'){
      this.props.dispatch({type:'ABOUT'})
    }
  }

  render(){
    // 名前入力モーダル
    const modalStyle = {
      backgroundColor:"#41c5ff",
    }
    const modalBody = (
      <div>
        <form id="first_form">
        <input type="text" size="20" placeholder="名前を入力してね" onChange={this.doChange} /><br/>
        <button className="yel_btn" onClick={this.doAction}>これでつくる</button>
        </form>
        <a href="#!" className="simple_btn">×とじる</a>
      </div>
    )

    // ショートカットを作成するモーダル
    const shortcutBody = (
      <div className="left shortmodal">
        <h2>iphoneの場合</h2>
        <div className="flex iphone">
          <ol>
            <li>safariで開く</li>
            <li>画面下部から共有オプションを開く</li>
            <li>「ホーム画面に追加」を選択する</li>
          </ol>
          <div className="short">
            <img src={image.short01}/>
            <img src={image.short02}/>
          </div>
        </div>  
        <h2>androidの場合</h2>
          <ol>
            <li>chromeで開く</li>
            <li>右上にあるメニューアイコン<img src={image.ellipsis} className="icon"/>を開く</li>
            <li>共有オプションから「ホーム画面に追加」を選択する</li>
          </ol>
        <div className="center"><a href="#!" className="simple_btn">×とじる</a></div>
      </div>
    )

    return <div className="first_conteiner">
      <div className="first">
        <h1>カードの使い方</h1>
        <p>カードの名前を入力します<br/>
          （例：ラジオ体操カード・レッスンカード）<br/>
        </p>
        <hr />
        <p>その日の目標を達成できたら空欄をタッチ！<br/>
          ↓<br/>
          スタンプが押される！<br/>
        </p>
        <hr />
        <div className="table flex left">
          <h2>Hint!</h2>
          <div>
          <p>カードのデータはブラウザごとに保存されます。<br/>
          複数のカードを作成したい場合はホーム画面にショートカットを作成することをおすすめします<br/>
          <a href="#shortcut">ショートカットを作成するには</a>
          </p>
          <p>スタンプを押した欄をもう一度タッチすると取り消せます</p>
          <p>設定マーク<img src={image.gear} className="gear" />をタッチすると様々な設定がおこなえます</p>
          </div>
        </div>
        {this.mode() ? 
        <div>
          <a className="yel_btn" href="#modal">カードを作る</a>
        </div>:
        <div>
          <a className="blue_btn" onClick={()=>this.modeAction('main')}>前の画面にもどる</a><br/>
          <a className="text_btn" onClick={()=>this.modeAction('about')}>アプリの詳細</a>
        </div>
        }
      </div>
        <Modal id="modal" name="カードをつくる" style={modalStyle} body={modalBody}/>
        <Modal id="shortcut" name="ショートカットを作成するには" style={modalStyle} body={shortcutBody}/>
    </div>
  }
}

export default connect((state)=>state)(First)