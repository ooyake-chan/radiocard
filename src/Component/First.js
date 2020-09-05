import React, { Component } from 'react';
import {connect} from 'react-redux'
import Modal from '../Component/Modal'
import{ nameAction } from '../Store'
import { ripple } from '../static/Ripple'

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
      this.ripple()
    }else if(mode === 'about'){
      this.props.dispatch({type:'ABOUT'})
      this.ripple()
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
        <a href="#!" className="simple_btn">とじる</a>
      </div>
    )

    return <div className="first_conteiner">
      <div className="first">
        <h1>カードの使い方</h1>
        <p>カードの名前を入力します<br/>
          ↓<br/>
          カードができた！<br/>
        </p>
        <hr />
        <p>目標を達成できたらくうらんをタッチ！<br/>
          ↓<br/>
          スタンプが押される！<br/>
        </p>
        <hr />
        <div className="table flex">
          <h2>Hint!</h2>
          <div>
          <p>スタンプを押した場所をもう一度タッチすると取り消せます</p>
          <p>設定マークをタッチすると様々な設定がおこなえます</p>
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
    </div>
  }
}

export default connect((state)=>state)(First)