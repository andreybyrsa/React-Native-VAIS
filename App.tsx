import { onBoardingContent } from './assets/images'
import Button from './src/components/Button'
import IconComponent from './src/components/IconComponent'
import ImageComponent from './src/components/ImageComponent/ImageComponent'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import getCurrentColor from './src/utils/getCurrentColor'

export default function App() {
  return (
    <View style={style.container}>
      <IconComponent nameIcons='md-chevron-forward' size={50} color='color-icon-primary'/>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
