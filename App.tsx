import Button from './src/components/Button'
import { StyleSheet, View } from 'react-native'
import Typography from './src/components/Typography'
import Cell from './src/components/Cell'

export default function App() {
  return (
    <View style={style.container}>
      <Button type="primary">Продолжить</Button>
      <Cell before={
        <View>ИКОНКА</View>
      } subtitle='Избранное' text='Какой-то текст, который поразит мир'/>
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
