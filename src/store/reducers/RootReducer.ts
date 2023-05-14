import user from './user'
import card from './card'
import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  user,
  card,
})

export default rootReducer
