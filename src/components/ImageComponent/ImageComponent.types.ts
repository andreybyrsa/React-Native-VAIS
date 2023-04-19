import { ImagePickerAsset } from 'expo-image-picker'
import { ImageStyle, ViewStyle } from 'react-native'

interface ImageComponentProps {
  style?: ImageStyle
  wrapperStyle?: ViewStyle

  imageSrc?: string | ImagePickerAsset
  alt: string
  isWrapped?: boolean
}

export default ImageComponentProps
