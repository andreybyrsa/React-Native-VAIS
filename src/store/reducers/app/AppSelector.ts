import { RootState } from '../..'

const AppSelector = () => {
  return (state: RootState) => state.app.app
}

export default AppSelector
