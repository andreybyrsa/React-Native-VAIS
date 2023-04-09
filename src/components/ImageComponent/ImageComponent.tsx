import { logo } from '../../../assets/images'
import ImageComponentStyles from './ImageComponent.styles'
import ImageComponentProps from './ImageComponent.types'
import React from 'react'
import { Image, ImageSourcePropType, Platform, View } from 'react-native'

function ImageComponent({
  style,
  wrapperStyle,
  imageSrc = logo,
  alt,
  isWrapped = false,
}: ImageComponentProps) {
  let CurrentImage = imageSrc
  if (Platform.OS !== 'web') {
    CurrentImage = Image.resolveAssetSource(imageSrc as ImageSourcePropType).uri
  }

  const image = (
    <Image
      style={[ImageComponentStyles['image-component'], style]}
      source={{ uri: CurrentImage }}
      alt={alt}
    />
  )

  if (isWrapped) {
    return (
      <View style={[ImageComponentStyles['image-component-wrapper'], wrapperStyle]}>{image}</View>
    )
  }

  return image
}

export default ImageComponent
