import FooterStyles from './Footer.styles'
import FooterProps from './Footer.types'
import { View } from 'react-native'

function Footer({ style, children, isNavigation }: FooterProps) {
  return (
    <View
      style={[FooterStyles.footer, isNavigation && FooterStyles['footer--is-navigation'], style]}
    >
      {children}
    </View>
  )
}

export default Footer
