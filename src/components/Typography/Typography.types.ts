import { ColorsType } from '../../../assets/styles/colors/colors'
import { TypographyVariantsType } from '../../../assets/styles/typography/typography'
import React from 'react'
import { TextStyle, ViewStyle } from 'react-native'

interface TypographyProps {
  style?: ViewStyle | TextStyle

  variant?: TypographyVariantsType

  color?: ColorsType

  children?: React.ReactNode
}

export default TypographyProps
