import Typography from '../Typography'
import CellStyle from './Cell.style'
import CellProps from './Cell.types'
import { useState } from 'react'
import { TouchableHighlight, View } from 'react-native'

function Cell({
  style,
  title,
  subtitle,
  text,
  before,
  after,
  onClick = () => null,
  disabled = false,
}: CellProps) {
  const [isPressed, setIsPressed] = useState<boolean>(false)

  const onHandlerFocus = () => {
    setIsPressed(true)
  }
  const onHandlerBlur = () => {
    setIsPressed(false)
  }

  return (
    <TouchableHighlight
      style={[CellStyle['cell-button'], style]}
      activeOpacity={1}
      underlayColor="transparent"
      onPress={onClick}
      onHideUnderlay={onHandlerBlur}
      onShowUnderlay={onHandlerFocus}
    >
      <View
        style={[
          CellStyle[`cell`],
          isPressed && CellStyle[`cell-active`],
          disabled && CellStyle[`cell-disabled`],
          style,
        ]}
      >
        {before}
        <View style={[CellStyle[`cell__text`], style]}>
          { title && <Typography variant="title-3">{title}</Typography>}
          { subtitle && <Typography variant="title-6">{subtitle}</Typography>}
          { text && <Typography variant="text-6">{text}</Typography>}
        </View>
        {after}
      </View>
    </TouchableHighlight>
  )
}

export default Cell
