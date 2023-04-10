import getCurrentColor from '../../utils/getCurrentColor'
import IconComponentProps from './IconComponent.types'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

function IconComponent({
  iconName = 'home-outline',
  size = 50,
  color = 'color-icon-primary',
}: IconComponentProps) {
  return (
    <Icon
      name={iconName}
      size={size}
      color={getCurrentColor(`${color}`)}
    />
  )
}

export default IconComponent
