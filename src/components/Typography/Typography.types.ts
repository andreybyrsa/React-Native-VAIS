import { ColorsType } from '../../../assets/styles/colors/colors'
import { TypographyVariantsType } from '../../../assets/styles/typography/typography'
import React from 'react'

interface TypographyProps {
  variant?: TypographyVariantsType

  color?: ColorsType

  children?: React.ReactNode
}

export default TypographyProps
