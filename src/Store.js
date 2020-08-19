import { createStore } from 'redux'

//ステートの値
const state_value = {
  cardName:'',
  fontcolor:'#434343',
  currentStamp:'../public/img/stamp_good.svg',
  stampData:[],
  back:{
    color:'#cef0ff',
    img:'../public/img/backsample_1.jpg',
    style:'backgroundSize:"320px"',
  },
  mode:'first'
}

// レデューサー
export function cardReducer(state = state_value, action){
  switch (action.type){
    case 'FIRST' : 
      return {
        mode:'first'
      }
    case 'MAIN' : 
      return {
        mode:'main'
      }
    default:
      return {
        mode:'ERROR'
      }
  }
}

// レデュースアクション
function modeReduce(state, sction){

}

// アクションクリエイター

export default createStore(cardReducer)
