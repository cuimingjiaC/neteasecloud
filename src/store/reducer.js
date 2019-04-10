import { combineReducers } from 'redux'

import { reducer as list } from 'components/swiper/'
import { reducer as songList } from 'reducer/songList/'

export default combineReducers({
  list,
  songList
})