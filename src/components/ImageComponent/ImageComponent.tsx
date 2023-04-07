import ImageComponentStyles from './ImageComponent.styles'
import ImageComponentProps from './ImageComponent.types'
import React from 'react'
import { Image, View } from 'react-native'

function ImageComponent({
  style,
  wrapperStyle,
  imageSrc,
  alt,
  isWrapped = false,
}: ImageComponentProps) {
  const currentImageSrc = imageSrc
    .split('/')
    .filter((elem) => elem !== elem.replace('.', ''))[0]
    .split('.')[0]

  const image = (
    <Image
      style={[ImageComponentStyles['image-component'], style]}
      source={require(`../../../assets/images/${currentImageSrc}.png`)}
      alt={alt}
    />
  )

  if (isWrapped) {
    return <View style={wrapperStyle}>{image}</View>
  }

  return image
}

export default ImageComponent
