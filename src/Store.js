import { createStore } from 'redux'

//ステートの値
const state_value = {
  cardname:'null',
  backcolor:'#cef0ff',
  fontcolor:'#4359',
  stampIndex:0,
  stampcheck:Array().fill(false),
  mode:'main',
  blacklist:['mode'],
  whitelist:['cardname', 'stampcheck', 'backcolor', 'stamp']
}

// レデューサー
export function cardReducer(state = state_value, action){
  switch (action.type){
    case 'FIRST' : 
      return {
        cardname:state.cardname,
        backcolor:state.backcolor,
        fontcolor:state.fontcolor,
        stampIndex:state.stampIndex,
        stampcheck:state.stampcheck,
        mode:'first'
      }
    case 'MAIN' : 
      return {
        cardname:state.cardname,
        backcolor:state.backcolor,
        fontcolor:state.fontcolor,
        stampIndex:state.stampIndex,
        stampcheck:state.stampcheck,
        mode:'main'
      }
    case 'HOW' : 
      return { 
        cardname:state.cardname,
        stampcheck:state.stampcheck,
        mode:'main'
      }
    case 'NAME':
      return nameReduce(state, action) 
    case 'STAMP':
      return stampReduce(state, action) 
    case 'BACK':
      return backReduce(state, action) 
    case 'CURRENTSTAMP':
      return currentStampReduce(state, action)
    case 'FONT':
      return fontReduce(state, action)
    default:
      return {
        cardname:state.cardname,
        fontcolor:state.fontcolor,
        stampIndex:state.stamp,
        stampcheck:state.stampcheck,
        mode:'main',
      }
  }
}

// レデュースアクション
function nameReduce(state, action){
  let name = action.cardname
  return {
    cardname:name,
    fontcolor:state.fontcolor,
    stampIndex:state.stampIndex,
    backcolor:state.backcolor,
    stampcheck:state.stampcheck,
    mode:'main',
  }
}
function stampReduce(state, action){
  let newstamp = action.stampcheck.slice()
  return{
    cardname:state.cardname,
    fontcolor:state.fontcolor,
    stampIndex:state.stampIndex,
    backcolor:state.backcolor,
    stampcheck:newstamp,
    mode:'main'
  }
}
function backReduce(state, action){
  let backcolor = action.backcolor.slice()
  return{
    cardname:state.cardname,
    fontcolor:state.fontcolor,
    stampIndex:state.stampIndex,
    stampcheck:state.stampcheck,
    backcolor:backcolor,
    mode:'main'
  }
}
function currentStampReduce(state, action){
  let stamp = action.stampIndex
  console.log(stamp)
  return{
    cardname:state.cardname,
    fontcolor:state.fontcolor,
    stampIndex:stamp,
    stampcheck:state.stampcheck,
    backcolor:state.backcolor,
    mode:'main'
  }
}

function fontReduce(state, action){
  let fontcolor = action.fontcolor
  return{
    cardname:state.cardname,
    fontcolor:fontcolor,
    stampIndex:state.stampIndex,
    stampcheck:state.stampcheck,
    backcolor:state.backcolor,
    mode:'main'
  }
}

// アクションクリエイター
export function nameAction(name){
  return {
    type:'NAME',
    cardname:name
  }
}

export function stampAction(stamp){
  return {
    type:'STAMP',
    stampcheck:stamp
  }
}

export function backAction(backcolor){
  return {
    type:'BACK',
    backcolor:backcolor
  }
}

export function currentStampAction(stamp){
  return {
    type:'CURRENTSTAMP',
    stampIndex:stamp
  }
}

export function fontAction(color){
  return{
    type:'FONT',
    fontcolor:color
  }
}

export default createStore(cardReducer, state_value)
