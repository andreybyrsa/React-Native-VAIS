import { IconNames } from '../IconComponent/IconNames'
import { GestureResponderEvent, ViewStyle } from 'react-native'

interface IconButtonProps {
  style?: ViewStyle

  type?: 'primary' | 'secondary'

  disabled?: boolean

  iconName: IconNames

  onClick?: ((event: GestureResponderEvent) => void) | undefined
}

export default IconButtonProps
