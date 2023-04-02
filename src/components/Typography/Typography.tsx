import TypographyStyles from './Typography.styles'
import TypographyProps from './Typography.types'
import { useFonts } from 'expo-font'
import { useCallback } from 'react'
import { Text, View } from 'react-native'

function Typography({ children }: TypographyProps) {
  const [fontsLoaded] = useFonts({
    'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Semibold': require('../../assets/fonts/Montserrat-Semibold.ttf'),
    'Montserrat-Medium': require('../../assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
  })

  return <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 30 }}>{children}</Text>
}

export default Typography
