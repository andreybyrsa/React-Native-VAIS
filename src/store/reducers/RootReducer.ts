import app from './app'
import card from './card'
import user from './user'
import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  user,
  card,
  app,
})

export default rootReducer
