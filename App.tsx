import { onBoardingContent } from './assets/images'
import ImageComponent from './src/components/ImageComponent/ImageComponent'
import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function App() {
  return (
    <View style={style.container}>
      <ImageComponent
        style={{ height: 100, width: 100 }}
        imageSrc={onBoardingContent}
        alt="onboarding"
      />
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
