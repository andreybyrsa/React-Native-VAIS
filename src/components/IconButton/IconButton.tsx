import IconButtonProps from './IconButton.types';
import { TouchableHighlight, View } from 'react-native';
import { useState } from 'react';
import IconButtonStyles from './IconButton.styles'

function IconButton({
  style,
  type='primary',
  children,
  disabled = false,
  onClick = () => null,
  }: IconButtonProps) {
    const [isPressed, setIsPressed] = useState<boolean>(false)

    const onHandlerFocus = () => {
      setIsPressed(true)
    }

    const onHandlerBlur = () => {
      setIsPressed(false)
    }

    return (
    <View style = {IconButtonStyles[`iconButton--${type}`], style}>
      <TouchableHighlight
              activeOpacity={1}
              underlayColor="transparent"
              onPress={onClick}
              onHideUnderlay={onHandlerBlur}
              onShowUnderlay={onHandlerFocus}
              disabled={disabled}
            >
            <View style={IconButtonStyles['iconButton-children'], style}>
              {children}
            </View>
      </TouchableHighlight>
    </View>
    )
  }

export default IconButton