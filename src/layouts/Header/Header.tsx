import HeaderStyles from './Header.styles'
import HeaderProps from './Header.types'
import { View } from 'react-native'

function Header({ style, leftSideSlot, rightSideSlot }: HeaderProps) {
  return (
    <View style={[HeaderStyles.header, style]}>
      <View style={HeaderStyles['header__left-side-slot']}>{leftSideSlot}</View>
      <View style={HeaderStyles['header__right-side-slot']}>{rightSideSlot}</View>
    </View>
  )
}

export default Header
