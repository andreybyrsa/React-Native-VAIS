import IconComponent from '../IconComponent'
import Typography from '../Typography'
import ButtonStyles from './Button.styles'
import IconButtonProps from './IconButton.types'
import { useState } from 'react'
import React from 'react'
import { TouchableHighlight, View } from 'react-native'

function IconButton({
  style,
  type = 'primary',
  disabled = false,
  iconName = 'checkmark',
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
    <View
      style={[
        ButtonStyles[`icon-button`],
        ButtonStyles[`icon-button--${type}`],
        disabled && ButtonStyles[`icon-button-${type}--disabled`],
        isPressed && ButtonStyles[`icon-button-${type}--active`],
        style,
      ]}
    >
      <TouchableHighlight
        style={[ButtonStyles['pressable-container']]}
        activeOpacity={1}
        underlayColor="transparent"
        onPress={onClick}
        onHideUnderlay={onHandlerBlur}
        onShowUnderlay={onHandlerFocus}
        disabled={disabled}
      >
        <IconComponent
          iconName={iconName}
          size={30}
        />
      </TouchableHighlight>
    </View>
  )
}

export default IconButton
