import IconButtonProps from './IconButton.types';
import { TouchableHighlight, View } from 'react-native';
import { useState } from 'react';
import IconButtonStyles from './IconButton.styles';
import IconComponent from '../IconComponent';

function IconButton({
  style,
  type='primary',
  iconName = 'md-heart-sharp',
  size = 30,
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
      <View>
        <TouchableHighlight
        style = {[
          IconButtonStyles[`iconButton--${type}`],
          isPressed && IconButtonStyles[`iconButton--${type}-active`],
          style]}
        // activeOpacity={1}
        // underlayColor="transparent"  
        onPress={onClick}
        onHideUnderlay={onHandlerBlur}
        onShowUnderlay={onHandlerFocus}
        disabled={disabled}
      >
        <IconComponent
          iconName={iconName}
          size={size}
          iconStyle = {[
            IconButtonStyles[`icon--${type}`],
            isPressed && IconButtonStyles[`icon--${type}-active`],
            style]}
        />
      </TouchableHighlight>
      </View>
      
    )
  }

export default IconButton