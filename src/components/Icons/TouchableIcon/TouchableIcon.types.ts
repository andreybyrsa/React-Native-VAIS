import { ColorsType } from '../../../../assets/styles/colors/colors'
import { IconNames } from '../IconComponent/IconNames'
import { GestureResponderEvent } from 'react-native'

interface TouchableIconProps {
  iconName: IconNames
  iconSize?: number
  iconColor?: ColorsType

  disabled?: boolean

  onPress?: ((event: GestureResponderEvent) => void) | undefined
}

export default TouchableIconProps
