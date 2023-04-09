import AppLoader from './src/components/Loaders/AppLoader/AppLoader'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function App() {
  return <AppLoader />
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
