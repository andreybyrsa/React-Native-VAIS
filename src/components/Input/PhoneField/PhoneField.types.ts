import React, { SetStateAction } from 'react'
import { ViewStyle } from 'react-native'

interface PhoneFieldProps {
  style?: ViewStyle

  label?: string

  type?: 'primary' | 'secondary'

  setValue?: React.Dispatch<SetStateAction<string>>

  required?: boolean
}

export default PhoneFieldProps
