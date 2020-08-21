import { createStore } from 'redux'

//ステートの値
const state_value = {
  cardname:'',
  fontcolor:'#434343',
  currentStamp:'../public/img/stamp_good.svg',
  stampData:[],
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
        fontcolor:state.fontcolor,
        currentStamp:state.currentStamp,
        stampData:state.stampData,
        mode:'first'
      }
    case 'MAIN' : 
      return {
        cardname:state.cardname,
        fontcolor:state.fontcolor,
        currentStamp:state.currentStamp,
        stampData:state.stampData,
        mode:'main'
      }
    case 'HOW' : 
      return { 
        cardname:state.cardname,
        fontcolor:state.fontcolor,
        currentStamp:state.currentStamp,
        stampData:state.stampData,
        mode:'main'
      }
    case 'NAME':
      return nameReduce(action) 
    default:
      return {
        mode:'ERROR'
      }
  }
}

// レデュースアクション
function nameReduce(action){
  alert(action.cardname)
  let name = action.cardname
  return {
    cardname:name,
    mode:'main'
  }

}

// アクションクリエイター
export function nameAction(name){
  alert(name)
  return {
    type:'NAME',
    cardname:name
  }
}

export default createStore(cardReducer)
