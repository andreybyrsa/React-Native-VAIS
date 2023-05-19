import FooterStyles from './Footer.styles'
import FooterProps from './Footer.types'
import { View } from 'react-native'

function Footer({ style, children, iconButton, isNavigation }: FooterProps) {
  return (
    <View
      style={[FooterStyles.footer, isNavigation && FooterStyles['footer--is-navigation'], style]}
    >
      <View style={FooterStyles.footer__content}>{children}</View>
      {iconButton}
    </View>
  )
}

export default Footer
