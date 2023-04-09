import { logo } from './assets/images'
import Cell from './src/components/Cell'
import ImageComponent from './src/components/ImageComponent'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={style.container}>
      <Cell
        before={
          <View>
            <Text>ИКОНКА</Text>
          </View>
        }
        after={
          <View>
            <Text>ИКОНКА</Text>
          </View>
        }
        subtitle="Избранное"
        text="Какой-то текст, который поразит мир"
      />
      <ImageComponent
        style={{ height: 200, width: 200 }}
        wrapperStyle={{ height: 200, width: 200 }}
        imageSrc={logo}
        alt="image"
        isWrapped
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
