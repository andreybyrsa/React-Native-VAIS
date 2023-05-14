import ModalTypes from '../../../types/ModalTypes'
import { ImagePickerAsset } from 'expo-image-picker'
import React, { SetStateAction } from 'react'

interface ProfilePictureModalProps extends ModalTypes {
  setImage: React.Dispatch<SetStateAction<ImagePickerAsset | undefined>>
}

export default ProfilePictureModalProps
