import Typography from '../Typography'
import ButtonStyles from './Button.styles'
import ButtonProps from './Button.types'
import { useState } from 'react'
import React from 'react'
import { TouchableHighlight, View } from 'react-native'

function Button({
  style,
  type = 'primary',
  disabled = false,
  children = 'Кнопка',
  onClick = () => null,
}: ButtonProps) {
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
        ButtonStyles[`button`],
        ButtonStyles[`button--${type}`],
        disabled && ButtonStyles[`button-${type}--disabled`],
        isPressed && ButtonStyles[`button-${type}--active`],
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
        <View>
          <Typography
            style={[
              ButtonStyles[`button__text-${type}`],
              isPressed && ButtonStyles[`button__text-${type}--active`],
            ]}
            variant="text-2"
          >
            {children}
          </Typography>
        </View>
      </TouchableHighlight>
    </View>
  )
}

export default Button
