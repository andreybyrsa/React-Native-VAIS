import TypographyStyles from './Typography.styles'
import TypographyProps from './Typography.types'
import { useFonts } from 'expo-font'
import { Text } from 'react-native'

function Typography({ variant = 'text-1', children }: TypographyProps) {
  const [] = useFonts({
    'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Semibold': require('../../assets/fonts/Montserrat-Semibold.ttf'),
    'Montserrat-Medium': require('../../assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
  })

  return <Text style={[TypographyStyles[`${variant}`]]}>{children}</Text>
}

export default Typography
