import getCurrentColor from '../../utils/getCurrentColor'
import IconComponentProps from './IconComponent.types'
import Icon from 'react-native-vector-icons/Ionicons'

function IconComponent({
  nameIcons = 'home',
  size = 50,
  color = 'color-icon-primary',
}: IconComponentProps) {
  return (
    <Icon
      name={nameIcons}
      size={size}
      color={getCurrentColor(`${color}`)}
    />
  )
}

export default IconComponent
