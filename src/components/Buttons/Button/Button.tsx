import IconComponent from '../../Icons/IconComponent'
import Typography from '../../Typography'
import ButtonStyles from './Button.styles'
import ButtonProps from './Button.types'
import { useState } from 'react'
import React from 'react'
import { TouchableHighlight, View } from 'react-native'

function Button({
  style,

  type = 'primary',
  disabled,
  isIcon,
  iconSize,

  children = 'Кнопка',
  iconName = 'checkmark',

  onPress = () => null,
}: ButtonProps) {
  const [isPressed, setIsPressed] = useState<boolean>(false)

  const ContentStyles = [
    ButtonStyles[`button__content-${type}`],
    isPressed && ButtonStyles[`button__content-${type}--active`],
  ]

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
        isIcon && ButtonStyles['icon-button'],
        isPressed && ButtonStyles[`button-${type}--active`],
        style,
      ]}
    >
      <TouchableHighlight
        style={[ButtonStyles['pressable-container']]}
        activeOpacity={1}
        underlayColor="transparent"
        onPress={onPress}
        onHideUnderlay={onHandlerBlur}
        onShowUnderlay={onHandlerFocus}
        disabled={disabled}
      >
        {isIcon && iconName ? (
          <IconComponent
            iconStyle={ContentStyles}
            iconName={iconName}
            size={iconSize}
          />
        ) : (
          <Typography
            style={ContentStyles}
            variant="text-2"
          >
            {children}
          </Typography>
        )}
      </TouchableHighlight>
    </View>
  )
}

export default Button
