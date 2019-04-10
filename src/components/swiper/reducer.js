import { 
    GET_LIST,
    SET_IS_LOADED
  } from './actionTypes'
  
  const defaultState = {
    list: [],
    isLoaded: false
  }
  
  export default (state=defaultState, action) => {
    switch(action.type) {
      case GET_LIST:
      // var a = {
      //   ...state,
      //   list: action.list
      // }
      // var b = state
      // var c = {...state}
      // var d = {...state,a:1}
      // var e = {...state,list:1}
      // console.log(b)
      // console.log(c)
      // console.log(d)
      // console.log(e)
      // console.log(1,a)
        return {
          ...state,
          list: action.list
        }
      case SET_IS_LOADED: 
        return {
          ...state,
          isLoaded: action.isLoaded
        }
      default:
        return state
    }
  }