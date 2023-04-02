import Button from './src/components/Button'
import { StyleSheet, View } from 'react-native'

export default function App() {
  return (
    <View style={style.container}>
      <Button type="secondary">Продолжить</Button>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 10,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
