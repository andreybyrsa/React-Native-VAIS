import { ImagePickerAsset } from 'expo-image-picker'
import React, { SetStateAction } from 'react'

interface ProfilePictureModalProps {
  opened: boolean
  setOpened: React.Dispatch<SetStateAction<boolean>>

  setImage: React.Dispatch<SetStateAction<ImagePickerAsset | undefined>>
}

export default ProfilePictureModalProps
