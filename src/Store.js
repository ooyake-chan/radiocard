import { createStore } from 'redux'

//ステートの値
const state_value = {
  cardname:'',
  backcolor:'#cef0ff',
  fontcolor:'#434343',
  image:require('./static/backsample_1.jpg'),
  stampIndex:0,
  stampcheck:Array().fill(false),
  bgmode:true,
  daymode:true,
  mode:'main',
  blacklist:['mode'],
  whitelist:['cardname', 'stampcheck', 'backcolor', 'stamp', 'stampIndex', 'image']
}

// レデューサー
export function cardReducer(state = state_value, action){
  switch (action.type){
    case 'FIRST' : 
      return {
        cardname:state.cardname,
        backcolor:state.backcolor,
        fontcolor:state.fontcolor,
        image:state.image,
        stampIndex:state.stampIndex,
        stampcheck:state.stampcheck,
        bgmode:state.bgmode,
        daymode:state.daymode,
        mode:'first'
      }
    case 'MAIN' : 
      return {
        cardname:state.cardname,
        backcolor:state.backcolor,
        fontcolor:state.fontcolor,
        image:state.image,
        stampIndex:state.stampIndex,
        stampcheck:state.stampcheck,
        bgmode:state.bgmode,
        daymode:state.daymode,
        mode:'main'
      }
    case 'HOW' : 
      return { 
        cardname:state.cardname,
        backcolor:state.backcolor,
        fontcolor:state.fontcolor,
        image:state.image,
        stampIndex:state.stampIndex,
        stampcheck:state.stampcheck,
        bgmode:state.bgmode,
        daymode:state.daymode,
        mode:'how'
      }
    case 'ABOUT' : 
      return { 
        cardname:state.cardname,
        backcolor:state.backcolor,
        fontcolor:state.fontcolor,
        image:state.image,
        stampIndex:state.stampIndex,
        stampcheck:state.stampcheck,
        bgmode:state.bgmode,
        daymode:state.daymode,
        mode:'about'
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
    case 'IMG':
      return imageReduce(state, action)
    case 'BGSWITCH':
      return bgSwitchReduce(state)
    case 'DAYSWITCH':
      return daySwitchReduce(state)
    case 'RESET':
      return resetReduce()
    default:
      return {
        cardname:state.cardname,
        fontcolor:state.fontcolor,
        image:state.image,
        stampIndex:state.stampIndex,
        backcolor:state.backcolor,
        stampcheck:state.stampcheck,
        bgmode:state.bgmode,
        daymode:state.daymode,
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
    image:state.image,
    stampIndex:state.stampIndex,
    backcolor:state.backcolor,
    stampcheck:state.stampcheck,
    bgmode:state.bgmode,
    daymode:state.daymode,
    mode:'main',
  }
}
function stampReduce(state, action){
  let newstamp = action.stampcheck.slice()
  return{
    cardname:state.cardname,
    fontcolor:state.fontcolor,
    image:state.image,
    stampIndex:state.stampIndex,
    backcolor:state.backcolor,
    stampcheck:newstamp,
    bgmode:state.bgmode,
    daymode:state.daymode,
    mode:'main'
  }
}
function backReduce(state, action){
  let backcolor = action.backcolor.slice()
  return{
    cardname:state.cardname,
    fontcolor:state.fontcolor,
    image:state.image,
    stampIndex:state.stampIndex,
    stampcheck:state.stampcheck,
    backcolor:backcolor,
    bgmode:state.bgmode,
    daymode:state.daymode,
    mode:'main'
  }
}
function currentStampReduce(state, action){
  let stamp = action.stampIndex
  console.log(stamp)
  return{
    cardname:state.cardname,
    fontcolor:state.fontcolor,
    image:state.image,
    stampIndex:stamp,
    stampcheck:state.stampcheck,
    backcolor:state.backcolor,
    bgmode:state.bgmode,
    daymode:state.daymode,
    mode:'main'
  }
}

function fontReduce(state, action){
  let fontcolor = action.fontcolor
  return{
    cardname:state.cardname,
    fontcolor:fontcolor,
    image:state.image,
    stampIndex:state.stampIndex,
    stampcheck:state.stampcheck,
    backcolor:state.backcolor,
    bgmode:state.bgmode,
    daymode:state.daymode,
    mode:'main'
  }
}

function imageReduce(state, action){
  let image = action.image.slice()
  return{
    cardname:state.cardname,
    fontcolor:state.fontcolor,
    image:image,
    stampIndex:state.stampIndex,
    stampcheck:state.stampcheck,
    backcolor:state.backcolor,
    bgmode:state.bgmode,
    daymode:state.daymode,
    mode:'main'
  }
}

function bgSwitchReduce(state){
  return{
    cardname:state.cardname,
    fontcolor:state.fontcolor,
    image:state.image,
    stampIndex:state.stampIndex,
    stampcheck:state.stampcheck,
    backcolor:state.backcolor,
    bgmode:!state.bgmode,
    daymode:state.daymode,
    mode:'main'
  }
}

function daySwitchReduce(state){
  return{
    cardname:state.cardname,
    fontcolor:state.fontcolor,
    image:state.image,
    stampIndex:state.stampIndex,
    stampcheck:state.stampcheck,
    backcolor:state.backcolor,
    bgmode:state.bgmode,
    daymode:!state.daymode,
    mode:'main'
  }
}

function resetReduce(){
  return{
    cardname:'',
    backcolor:'#cef0ff',
    fontcolor:'#434343',
    image:require('./static/backsample_1.jpg'),
    stampIndex:0,
    stampcheck:Array().fill(false),
    bgmode:false,
    daymode:true,
    mode:'first'
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

export function imageAction(url){
  return{
    type:'IMG',
    image:url
  }
}
export default createStore(cardReducer, state_value)
