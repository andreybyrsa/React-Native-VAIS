import React, { SetStateAction } from 'react'
import { ViewStyle } from 'react-native'

interface NumberFieldProps {
  style?: ViewStyle

  label?: string
  placeholder?: string

  type?: 'primary' | 'secondary'

  setValue?: React.Dispatch<SetStateAction<string>>

  required?: boolean
  maxLength?: number
  minLength?: number
}

export default NumberFieldProps
