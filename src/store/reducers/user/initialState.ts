import { User } from '../../../domain/User'

interface UserInitialState {
  user: User | null
}

const initialState: UserInitialState = {
  user: null,
}

export default initialState
