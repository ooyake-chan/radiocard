import React, { Component } from 'react';
import {connect} from 'react-redux'
import { currentStampAction } from '../Store'
import Stamps from './Stamp'
import Setting from './Setting'
import Modal from './Modal'
import Img from '../static/backsample_1.jpg'

class Main extends Component{
  constructor(props){
    super(props)
    this.state = {
      style:{color:this.props.fontcolor},
      image:this.props.image
    }
    this.stampChange = this.stampChange.bind(this)
    this.fontChange = this.fontChange.bind(this)
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

  // previewFile(file){
  //   const reader = new FileReader()
  //   const preview = document.getElementById("preview")
  //   reader.onload = (e)=>{
  //     const imageUrl = e.target.result
  //     preview.appendChild(<img src={imageUrl}/>)
  //   }
  //   reader.readAsDataURL(file)
  // }

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
        preview.appendChild(img)
      }
      reader.readAsDataURL(file)
    }
    previewFile(upImg)
  }
  
  render (){
    const img_modal_Style = {
      backgroundColor:"#41c5ff",
    }
    const img_modal_Body = (
      <div>
        <span id="preview"></span>
        <form>
        <input type="file" id="input_img" onChange={this.fileInput}/>
        <button className="yel_btn" value="画像を変更する"/>
        </form>
      </div>
    )
    let d = new Date()
    let date = d.getFullYear()+'ねん' + (1+ d.getMonth()) + 'がつ'
    let colorChange = this.props.colorChange
    let stampChange = this.stampChange
    let fontChange = this.fontChange
    return <main style={this.state.style}>
      <div className="main">
        <div className="img_wrapper">
          <h1>{this.props.cardname}</h1>
          <img src={Img}/>
          <h2>{date}</h2>
        </div>
        
        <Modal id="img_up_modal" name="画像のアップロード" style={img_modal_Style} body={img_modal_Body}/>
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