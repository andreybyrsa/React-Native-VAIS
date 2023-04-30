import { User } from '../domain/User'
import axios from 'axios'

export const setProfilePic = async (user: User) => {
  return await axios
    .post('http://localhost:4444/upload', {
      ...user,
    })
    .then((response) => {
      console.log(response.data)
      return response.data
    })
    .catch((error) => console.log(error))
}
