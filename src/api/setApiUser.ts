import { User } from '../domain/User'
import axios from 'axios'

export const setApiUser = async (user: User) => {
  return await axios
    .post('https://virtual-ai-stylist-backend.onrender.com/auth', {
      ...user,
    })
    .then((response) => response)
    .catch((error) => console.log(error))
}
