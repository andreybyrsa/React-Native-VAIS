import { ColorsStyles } from '../../../assets/styles/colors/colors'
import TypographyStyles from './Typography.styles'
import TypographyProps from './Typography.types'
import { Text } from 'react-native'

function Typography({ style, variant = 'text-1', color, children }: TypographyProps) {
  let CurrentColor

  if (color) {
    CurrentColor = {
      ...ColorsStyles[color],
    }
  }

  return <Text style={[style, TypographyStyles[`${variant}`], CurrentColor]}>{children}</Text>
}

export default Typography
