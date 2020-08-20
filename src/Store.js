import { createStore } from 'redux'

//ステートの値
const state_value = {
  cardname:'',
  fontcolor:'#434343',
  currentStamp:'../public/img/stamp_good.svg',
  stampData:[],
  back:{
    color:'#cef0ff',
    img:'backsample_1.jpg',
    style:'backgroundSize:"320px"',
  },
  mode:'first',
  blacklist:[],
  whitelist:[]
}

// レデューサー
export function cardReducer(state = state_value, action){
  switch (action.type){
    case 'FIRST' : 
      return {mode:'first'}
    case 'MAIN' : 
      return {mode:'main'}
    case 'HOW' : 
      return { mode:'main'}
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
    fontcolor:'#434343',
    currentStamp:'../public/img/stamp_good.svg',
    stampData:[],
    back:{
      color:'#cef0ff',
      img:'../public/img/backsample_1.jpg',
      style:'backgroundSize:"320px"',
    },
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
