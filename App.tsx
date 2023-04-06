import Button from './src/components/Button'
import { StyleSheet, View } from 'react-native'
import Typography from './src/components/Typography'

export default function App() {
  return (
    <View style={style.container}>
      <Button type="primary">Продолжить</Button>
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
