import initialState from './initialState'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppRating(state, action: PayloadAction<number>) {
      state.app.rating = action.payload
    },
  },
})

export const { setAppRating } = appSlice.actions

export default appSlice.reducer
