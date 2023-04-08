import { ImageStyle, ViewStyle } from 'react-native'

interface ImageComponentProps {
  style?: ImageStyle
  wrapperStyle?: ViewStyle

  imageSrc: string
  alt: string
  isWrapped?: boolean
}

export default ImageComponentProps
