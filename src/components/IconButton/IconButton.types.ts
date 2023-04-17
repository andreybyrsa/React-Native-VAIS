import { IconNames } from '../IconComponent/IconNames'
import { ViewStyle } from 'react-native'
import { GestureResponderEvent } from 'react-native/types'

interface IconButtonProps {
  style?: ViewStyle

  iconName?: IconNames

  size?: number

  type?: 'primary' | 'secondary'

  disabled?: boolean

  onClick?: ((event: GestureResponderEvent) => void) | undefined
}

export default IconButtonProps
