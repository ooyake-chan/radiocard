import { createStore } from 'redux'

//ステートの値
const state_value = {
  cardname:'',
  fontcolor:'#434343',
  currentStamp:'../public/img/stamp_good.svg',
  stampcheck:[],
  mode:'main',
  blacklist:['mode'],
  whitelist:['cardname']
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
    default:
      return {
        mode:'ERROR'
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
  let stamp = action.stampcheck
  return{
    cardname:state.cardname,
    fontcolor:state.fontcolor,
    currentStamp:state.currentStamp,
    stampcheck:stamp,
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

export default createStore(cardReducer)
