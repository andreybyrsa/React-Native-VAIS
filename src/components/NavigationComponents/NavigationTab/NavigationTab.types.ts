import { IconNames } from '../../IconComponent/IconNames'
import { ViewStyle } from 'react-native'

interface NavigationTabProps {
  style?: ViewStyle
  to: string
  iconName: IconNames
  navigationName: string
}

export default NavigationTabProps
