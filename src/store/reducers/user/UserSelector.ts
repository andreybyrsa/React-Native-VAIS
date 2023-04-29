import { RootState } from '../..'

const UserSelector = () => {
  return (state: RootState) => state.user.user
}

export default UserSelector
