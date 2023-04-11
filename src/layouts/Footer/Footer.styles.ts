import getCurrentColor from '../../utils/getCurrentColor'
import { StyleSheet } from 'react-native'

const FooterStyles = StyleSheet.create({
  footer: {
    width: '100%',
    backgroundColor: getCurrentColor('color-background-primary'),
    paddingVertical: 16,
    paddingHorizontal: 20,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  'footer--is-navigation': {
    paddingTop: 16,
    paddingHorizontal: 0,
    paddingBottom: 0,
  },
})

export default FooterStyles
