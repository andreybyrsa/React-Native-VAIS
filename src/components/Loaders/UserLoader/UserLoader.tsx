import Typography from '../../Typography'
import UserLoaderStyles from './UserLoader.styles'
import UserLoaderProps from './UserLoader.types'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

function UserLoader({ style }: UserLoaderProps) {
  const [dots, setDots] = useState<string>('')

  useEffect(() => {
    if (dots.length < 3) {
      setTimeout(() => setDots((prevState) => prevState + '.'), 200)
    } else {
      setTimeout(() => setDots(''), 200)
    }
  }, [dots])

  return (
    <View style={[UserLoaderStyles['user-loader'], style]}>
      <Typography variant="title-3">Загрузка пользователя{dots}</Typography>
    </View>
  )
}

export default UserLoader
