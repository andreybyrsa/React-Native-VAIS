import React, { SetStateAction } from 'react'
import { ViewStyle } from 'react-native'

interface TextFieldProps {
  style?: ViewStyle

  label?: string
  placeholder?: string

  type?: 'primary' | 'secondary'

  setValue?: React.Dispatch<SetStateAction<string>>
  setError?: React.Dispatch<SetStateAction<string>>

  required?: boolean
  maxLength?: number
  minLength?: number
}

export default TextFieldProps
