import { createStore } from 'redux'

//ステートの値
const state_value = {
  cardname:'',
  backcolor:'',
  fontcolor:'#434343',
  stamp:'',
  stampcheck:Array().fill(false),
  mode:'main',
  blacklist:['mode'],
  whitelist:['cardname', 'stampcheck', 'backcolor']
}

// レデューサー
export function cardReducer(state = state_value, action){
  switch (action.type){
    case 'FIRST' : 
      return {
        cardname:state.cardname,
        stampcheck:state.stampcheck,
        mode:'first'
      }
    case 'MAIN' : 
      return {
        cardname:state.cardname,
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
      return nameReduce(action) 
    case 'STAMP':
      return stampReduce(state, action) 
    case 'BACK':
      return backReduce(state, action) 
    case 'CURRENTSTAMP':
      return currentStampReduce(state, action)
    default:
      return {
        cardname:state.cardname,
        fontcolor:state.fontcolor,
        stamp:state.stamp,
        stampcheck:state.stampcheck,
        mode:'main',
      }
  }
}

// レデュースアクション
function nameReduce(action){
  let name = action.cardname
  return {
    cardname:name,
    mode:'main',
  }
}
function stampReduce(state, action){
  let newstamp = action.stampcheck.slice()
  return{
    cardname:state.cardname,
    fontcolor:state.fontcolor,
    stamp:state.stamp,
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
    stamp:state.stamp,
    stampcheck:state.stampcheck,
    backcolor:backcolor,
    mode:'main'
  }
}
function currentStampReduce(state, action){
  let stamp = action.stamp
  console.log(stamp)
  return{
    cardname:state.cardname,
  //   fontcolor:state.fontcolor,
    // stamp:stamp,
  //   stampcheck:state.stampcheck,
  //   backcolor:state.backcolor,
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
    stamp:stamp
  }
}
export default createStore(cardReducer)
