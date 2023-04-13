import { ViewStyle } from 'react-native/types'
import { ColorsType } from '../../../assets/styles/colors/colors'
import { IconNames } from './IconNames'

interface IconComponentProps {
  iconStyle?: ViewStyle
  iconName: IconNames
  size?: number
  color?: ColorsType
}

export default IconComponentProps
