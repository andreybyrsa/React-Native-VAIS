import Typography from '../../Typography'
import UserLoaderStyles from './UserLoader.styles'
import UserLoaderProps from './UserLoader.types'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

function UserLoader({ style }: UserLoaderProps) {
  const [dots, setDots] = useState<string>('')

  const navigation = useNavigation()

  useEffect(() => {
    if (dots.length < 3) {
      setTimeout(() => setDots((prevState) => prevState + '.'), 200)
    } else {
      setTimeout(() => setDots(''), 200)
    }
  }, [dots])

  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        key: '0',
        index: 0,
        routes: [{ name: '/' as never }],
      })
    }, 1500)
  }, [])

  return (
    <View style={[UserLoaderStyles['user-loader'], style]}>
      <Typography variant="title-3">Загрузка пользователя{dots}</Typography>
    </View>
  )
}

export default UserLoader
