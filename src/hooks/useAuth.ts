import UserSelector from '../store/reducers/user/UserSelector'
import { useSelector } from 'react-redux'

const useAuth = () => {
  const user = useSelector(UserSelector())
  return !!user?.id
}

export default useAuth
