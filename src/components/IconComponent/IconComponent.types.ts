import { ColorsType } from '../../../assets/styles/colors/colors'
import { IconNames } from './IconNames'
import { ViewStyle } from 'react-native/types'

interface IconComponentProps {
  iconStyle?: ViewStyle | any
  iconName: IconNames
  size?: number
  color?: ColorsType
}

export default IconComponentProps
