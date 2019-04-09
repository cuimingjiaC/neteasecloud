import http from 'utils/fetch'
// import {getRequestMethod} from 'utils/requests'
import { 
  GET_LIST,
  SET_IS_LOADED
} from './actionTypes'

export const getListSync = list => ({
  type: GET_LIST,
  list
})

export const setIsLoaded = isLoaded => ({
  type: SET_IS_LOADED,
  isLoaded
})

export const getListAsync = () => {
  return async dispatch => {
    let result = await http.get('/api/personalized/newsong')
    dispatch(getListSync(result.result))
    dispatch(setIsLoaded(true))
  }
}