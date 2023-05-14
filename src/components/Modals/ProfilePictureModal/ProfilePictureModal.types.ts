import Modal from '../../../types/Modal.types'
import { ImagePickerAsset } from 'expo-image-picker'
import React, { SetStateAction } from 'react'

interface ProfilePictureModalProps extends Modal {
  setImage: React.Dispatch<SetStateAction<ImagePickerAsset | undefined>>
}

export default ProfilePictureModalProps
