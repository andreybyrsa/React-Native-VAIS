import { ColorsStyles } from '../../../assets/styles/colors/colors'
import useCustomFonts from '../../hooks/useCustomFonts'
import TypographyStyles from './Typography.styles'
import TypographyProps from './Typography.types'
import { Text } from 'react-native'

function Typography({ style, variant = 'text-1', color, children }: TypographyProps) {
  const fonts = useCustomFonts()

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
