import TypographyStyles from './Typography.styles'
import TypographyProps from './Typography.types'
import { useFonts } from 'expo-font'
import { Text } from 'react-native'

function Typography({
  variant = 'text-1',
  color,
  children,
}: TypographyProps) {
  const [fonts] = useFonts({
    'Montserrat-Bold': require('../../../assets/styles/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Semibold': require('../../../assets/styles/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Medium': require('../../../assets/styles/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('../../../assets/styles/fonts/Montserrat-Regular.ttf'),
  })

  if (!fonts) {
    return <Text>Error fonts</Text>
  }

  return (
    <Text style={[TypographyStyles[`${variant}`], TypographyStyles[`${color}`]]}>{children}</Text>
  )
}

export default Typography
