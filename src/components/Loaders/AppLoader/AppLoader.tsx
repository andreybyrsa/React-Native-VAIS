import { logo } from '../../../../assets/images'
import ImageComponent from '../../ImageComponent'
import Typography from '../../Typography'
import AppLoaderStyles from './AppLoader.styles'
import AppLoaderProps from './AppLoader.types'
import React from 'react'
import { View } from 'react-native'

function AppLoader({ style }: AppLoaderProps) {
  return (
    <View style={[AppLoaderStyles['app-loader'], style]}>
      <ImageComponent
        style={{ width: 156, height: 156 }}
        imageSrc={logo}
        alt="app-loader"
      />
      <Typography
        variant="title-1"
        color="color-text-secondary"
      >
        Virtual AI Stylist
      </Typography>
    </View>
  )
}

export default AppLoader
