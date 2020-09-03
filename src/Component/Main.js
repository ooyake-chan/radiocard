import React, { Component } from 'react';
import {connect} from 'react-redux'
import { currentStampAction, imageAction } from '../Store'
import Stamps from './Stamp'
import Setting from './Setting'
import Modal from './Modal'
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';

const img ={
  coution:require('../static/coution.svg'),
}

class Main extends Component{
  constructor(props){
    super(props)
    this.state = {
      style:{color:this.props.fontcolor},
      image:this.props.image
    }
    this.stampChange = this.stampChange.bind(this)
    this.fontChange = this.fontChange.bind(this)
    this.fileInput = this.fileInput.bind(this)
    this.reset = this.reset.bind(this)
  }

  stampChange(stampIndex){
    let Index = stampIndex
    let action = currentStampAction(Index)
    this.props.dispatch(action)
  }

  fontChange(color){
    this.setState({
      style:{color:color}
    })
  }

  fileInput(){
    const inputImg = document.getElementById('input_img')
    const upImg = inputImg.files[0]
    function previewFile(file){
      const reader = new FileReader()
      const preview = document.getElementById("preview")
      reader.onload = (e)=>{
        const imageUrl = e.target.result
        const img = document.createElement('img')
        img.src = imageUrl
        img.id = 'preview_img'
        preview.appendChild(img)
      }
      reader.readAsDataURL(file)
    }
    previewFile(upImg)
  }

  imageChange(){
    const preview = document.getElementById('preview_img')
    let url = preview ? preview.src : false
    if(!url){
      return
    }
    let action = imageAction(url)
    this.props.dispatch(action)
    this.setState({
      image:url
    })
    preview.src = ""
  }

  reset(){
    this.props.dispatch({type:'RESET'}) 
  }
  
  render (){
    const bgimg = {
      position:"static",
      transform:"translateX(0%)"
    }

    // 画像アップロードのモーダル
    const img_modal_Style = {
      backgroundColor:"#41c5ff",
    }
    const img_modal_Body = (
      <div>
        <span id="preview">
          プレビュー
          </span>
        <form>
        <input type="file" id="input_img" onChange={this.fileInput}/><br/>
        <a className="yel_btn" onClick={()=>this.imageChange()} href="#">画像を変更する</a>
        </form>
      </div>
    )

    // リセット画面のモーダル
    const reset_modal_Style = {
      backgroundColor:"#ff80c9",
    }
    const reset_modal_Body = (
      <div className="reset_modal">
        <div className="coution_icon">
          <h2>注意!</h2>
          <img src={img.coution} />
        </div>
        <p>カードをリセットしようとしています<br/>
        リセットするとデータは元に戻せません</p>
        <button className="red_btn" onClick={()=>this.reset()}>それでもリセットする！</button><br/>
        <a className="blue_btn" href="#!">リセットしないでもどる</a>
      </div>
    )

    let bgmode = this.props.bgmode
    let d = new Date()
    let date = d.getFullYear()+'ねん' + (1+ d.getMonth()) + 'がつ'
    let colorChange = this.props.colorChange
    let stampChange = this.stampChange
    let fontChange = this.fontChange
    return <main style={this.state.style}>
      <div className="main">
        <div className="img_wrapper">
          {bgmode ? 
          <h1 style={bgimg}>{this.props.cardname}</h1>
          :
          <h1>{this.props.cardname}</h1>
          }
          {bgmode ? '' : <img src={this.state.image}/> }
          <h2>{date}</h2>
        </div>
        <Modal id="img_up_modal" name="画像のアップロード" style={img_modal_Style} body={img_modal_Body}/>
        <Modal id="reset_modal" name="リセット" style={reset_modal_Style} body={reset_modal_Body}/>
        <Stamps />
      </div>
        <Setting colorChange={colorChange} stampChange={stampChange} fontChange={fontChange}/>
    </main>
  }
}

function mappingState(state){
  return{
    cardname:state.cardname,
    stampcheck:state.stampcheck,
  }
}

export default connect((state)=>state)(Main)