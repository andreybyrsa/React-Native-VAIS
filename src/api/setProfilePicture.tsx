import axios from 'axios'
import { ImagePickerAsset } from 'expo-image-picker'

const setProfilePicture = async (uri?: string | ImagePickerAsset) => {
  const formData = new FormData()
  const imageInfo = {
    name: 'profilePic',
    uri,
    type: 'image/jpg',
  } as unknown as Blob
  formData.append('image', imageInfo)

  return await axios
    .post('https://virtual-ai-stylist-backend.onrender.com/upload', formData, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => `https://virtual-ai-stylist-backend.onrender.com${response.data.url}`)
    .catch((error) => console.log(`multer ${error}`))
}

export default setProfilePicture
