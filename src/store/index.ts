import rootReducer from './reducers/RootReducer'
import rootSaga from './saga'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleWare from 'redux-saga'

const sagaMiddleWare = createSagaMiddleWare()

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleWare),
})

sagaMiddleWare.run(rootSaga)

export default store

export type RootState = ReturnType<typeof store.getState>
