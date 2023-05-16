import getCurrentColor from '../../../utils/getCurrentColor'
import { Dimensions, StyleSheet } from 'react-native'

const ScreenHeight = Dimensions.get('window').height

const ConnectUsModalStyles = StyleSheet.create({
  'connect-us-modal': {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  'connect-us-modal__info': {
    marginTop: ScreenHeight / 3,
    width: '100%',
    height: 94,
    backgroundColor: getCurrentColor('color-background-primary'),
    borderRadius: 20,

    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
})

export default ConnectUsModalStyles
