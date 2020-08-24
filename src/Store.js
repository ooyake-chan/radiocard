import { createStore } from 'redux'

//ステートの値
const state_value = {
  cardname:'',
  fontcolor:'#434343',
  currentStamp:'../public/img/stamp_good.svg',
  stampcheck:Array().fill(false),
  mode:'main',
  counter:0,
  blacklist:['mode'],
  whitelist:['cardname', 'stampcheck']
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
    case 'COUNTER':
      return {
        counter:state.counter + 1
      }  
    default:
      return {
        cardname:state.cardname,
        fontcolor:state.fontcolor,
        currentStamp:state.currentStamp,
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
    currentStamp:state.currentStamp,
    stampcheck:newstamp,
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
