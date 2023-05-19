import IconComponent from '../IconComponent'
import TouchableIconProps from './TouchableIcon.types'
import { TouchableHighlight } from 'react-native'

function TouchableIcon({
  iconName,
  iconSize,
  iconColor,

  disabled,

  onPress = () => null,
}: TouchableIconProps) {
  return (
    <TouchableHighlight
      underlayColor="transparent"
      activeOpacity={1}
      onPress={onPress}
      disabled={disabled}
    >
      <IconComponent
        iconName={iconName}
        size={iconSize}
        color={iconColor}
      />
    </TouchableHighlight>
  )
}

export default TouchableIcon
