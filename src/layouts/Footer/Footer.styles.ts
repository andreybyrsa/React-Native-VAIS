import getCurrentColor from '../../utils/getCurrentColor'
import { Platform, StatusBar, StyleSheet } from 'react-native'

const FooterStyles = StyleSheet.create({
  footer: {
    width: '100%',
    backgroundColor: getCurrentColor('color-background-primary'),
    paddingTop: 16,
    paddingBottom: Platform.OS === 'android' ? StatusBar.currentHeight : 8,
    paddingHorizontal: 20,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  'footer--is-navigation': {
    paddingHorizontal: 0,
    paddingBottom: 0,
  },
})

export default FooterStyles
