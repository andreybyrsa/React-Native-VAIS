import getCurrentColor from '../../../utils/getCurrentColor'
import IconComponentStyles from './IconComponent.styles'
import IconComponentProps from './IconComponent.types'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

function IconComponent({
  iconName = 'home-outline',
  size = 50,
  color = 'color-icon-primary',
  iconStyle,
}: IconComponentProps) {
  return (
    <Icon
      style={[IconComponentStyles['icon-component'], iconStyle]}
      name={iconName}
      size={size}
      color={getCurrentColor(`${color}`)}
    />
  )
}

export default IconComponent
