import axios from 'axios'

interface verifyRequest {
  code?: string
  phoneNumber?: string
}

const getUserToken = async (verifyRequest: verifyRequest) => {
  return await axios
    .post('https://virtual-ai-stylist-backend.onrender.com/auth/verify', {
      ...verifyRequest,
    })
    .then((response) => response.data)
    .catch((error) => console.log(error))
}

export default getUserToken
