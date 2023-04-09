import IconComponent from './src/components/IconComponent'
import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function App() {
  return (
    <View style={style.container}>
      <IconComponent
        nameIcons="ios-add-circle-outline"
        size={50}
        color="color-icon-primary"
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
