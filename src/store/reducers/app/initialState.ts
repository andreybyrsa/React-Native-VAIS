import { App } from '../../../domain/App'

interface AppInitialState {
  app: App
}

const initialState: AppInitialState = {
  app: {
    rating: undefined
  },
}

export default initialState
