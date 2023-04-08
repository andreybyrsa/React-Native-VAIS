import { ColorsStyles } from '../../../assets/styles/colors/colors'
import TypographyStyles from './Typography.styles'
import TypographyProps from './Typography.types'
import { useFonts } from 'expo-font'
import { Text } from 'react-native'

function Typography({ style, variant = 'text-1', color, children }: TypographyProps) {
  const [fonts] = useFonts({
    'Montserrat-Bold': require('../../../assets/styles/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Semibold': require('../../../assets/styles/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Medium': require('../../../assets/styles/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('../../../assets/styles/fonts/Montserrat-Regular.ttf'),
  })

  let CurrentColor
  if (color) {
    CurrentColor = {
      ...ColorsStyles[color],
    }
  }

  if (!fonts) {
    return <Text>Error fonts</Text>
  }

  return <Text style={[style, TypographyStyles[`${variant}`], CurrentColor]}>{children}</Text>
}

export default Typography
