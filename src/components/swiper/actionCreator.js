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

export const getListAsync = (tag) => {
  return async dispatch => {
   let result
    tag ? result = await http.get('/api/top/playlist?tag='+tag) :result = await http.get('/api/top/playlist')
    dispatch(getListSync(result.playlists))
    dispatch(setIsLoaded(true))
  }
}