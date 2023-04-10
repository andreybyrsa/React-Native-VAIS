import { RoutesPathsType } from '../../../types/RoutesPaths'
import { IconNames } from '../../IconComponent/IconNames'
import { ViewStyle } from 'react-native'

interface NavigationTabProps {
  style?: ViewStyle
  to: RoutesPathsType
  iconName: IconNames
}

export default NavigationTabProps
