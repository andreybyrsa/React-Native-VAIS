import { ViewStyle } from 'react-native';
import React from 'react';
import { GestureResponderEvent } from 'react-native/types';

interface IconButtonProps {
  style?: ViewStyles

  children?: React.ReactNode

  type?: 'primary' | 'secondary'
  disabled?: boolean

  onClick?:  ((event: GestureResponderEvent) => void) | undefined
}

export default IconButtonProps