import { ViewStyle } from 'react-native';
import React from 'react';
import { GestureResponderEvent } from 'react-native/types';
import { IconNames } from '../IconComponent/IconNames';

interface IconButtonProps {
  style?: ViewStyle

  iconName?: IconNames
  size?: number

  type?: 'primary' | 'secondary'
  disabled?: boolean

  onClick?:  ((event: GestureResponderEvent) => void) | undefined
}

export default IconButtonProps