import { IconNames } from '../../Icons/IconComponent/IconNames'
import { ViewStyle } from 'react-native'
import { GestureResponderEvent } from 'react-native/types'

interface ButtonProps {
  style?: ViewStyle

  type?: 'primary' | 'secondary'
  disabled?: boolean
  isIcon?: boolean
  iconSize?: number

  children?: string
  iconName?: IconNames

  onPress?: ((event: GestureResponderEvent) => void) | undefined
}

export default ButtonProps
