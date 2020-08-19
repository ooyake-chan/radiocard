import { createStore } from 'redux'

//ステートの値
const state_value = {
  cardName:'',
  fontcolor:'#434343',
  currentStamp:'../public/img/stamp_good.svg',
  stampData:[],
  backDesign:{
    color:'#cef0ff',
    img:'../public/img/backsample_1.jpg',
    style:'backgroundSize:"320px"',
  },
  mode:'FIRST'
}

// レデューサー
export function cardReducer(state = state_value, action){
  switch (action.type){
    case 'FIRST' : 
      return {
        mode:'FIRST'
      }
    case 'MAIN' : 
      return {
        mode:'MAIN'
      }
    default:
      return {
        mode:'ERROR'
      }
  }
}

// レデュースアクション

// アクションクリエイター

export default createStore(cardReducer)
