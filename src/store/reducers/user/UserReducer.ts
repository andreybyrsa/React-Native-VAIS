import { User } from '../../../domain/User'
import initialState from './initialState'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload
    },
    setUserByLocaleStorage(state, action: PayloadAction<User>) {
      state.user = action.payload
    },
    setUserToken(state, action: PayloadAction<string>) {
      if (state.user) {
        state.user.id = action.payload
      }
    },
    setVerifyCode(state, action: PayloadAction<string>) {
      if (state.user) {
        state.user.verifyCode = action.payload
      }
    },
    removeUser(state) {
      state.user = null
    },
  },
})

export const { setUser, setUserByLocaleStorage, setUserToken, setVerifyCode, removeUser } =
  userSlice.actions

export default userSlice.reducer
