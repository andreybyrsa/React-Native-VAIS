import IconComponent from '../IconComponent'
import IconButtonStyles from './IconButton.styles'
import IconButtonProps from './IconButton.types'
import { useState } from 'react'
import { TouchableHighlight, View } from 'react-native'

function IconButton({
  style,
  type = 'primary',
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
    <View
      style={[
        IconButtonStyles[`icon-button`],
        IconButtonStyles[`icon-button--${type}`],
        disabled && IconButtonStyles[`icon-button-${type}--disabled`],
        isPressed && IconButtonStyles[`icon-button-${type}--active`],
        style,
      ]}
    >
      <TouchableHighlight
        style={[IconButtonStyles['pressable-container']]}
        activeOpacity={1}
        underlayColor="transparent"
        onPress={onClick}
        onHideUnderlay={onHandlerBlur}
        onShowUnderlay={onHandlerFocus}
        disabled={disabled}
      >
        <IconComponent
          iconName={iconName}
          size={size}
          iconStyle={[
            IconButtonStyles[`icon--${type}`],
            isPressed && IconButtonStyles[`icon--${type}-active`],
            style,
          ]}
        />
      </TouchableHighlight>
    </View>
  )
}

export default IconButton
