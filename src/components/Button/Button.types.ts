import { ViewStyle } from 'react-native';
import { GestureResponderEvent } from 'react-native/types';


interface ButtonProps {
  style?: ViewStyle

  type?: 'primary' | 'secondary'

  disabled?: boolean

  children?: string

  onClick?: ((event: GestureResponderEvent) => void) | undefined
}

export default ButtonProps