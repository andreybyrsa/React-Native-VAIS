import Button from './src/components/Button'
import Footer from './src/layouts/Footer'
import Header from './src/layouts/Header'
import PageLayout from './src/layouts/PageLayout'
import { Text, View, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={style.container}>
      <Button type="secondary">Продолж</Button>
    </View>
  )
}

const style = StyleSheet.create({
  'container':{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
