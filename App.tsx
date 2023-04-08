import Cell from './src/components/Cell'
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
