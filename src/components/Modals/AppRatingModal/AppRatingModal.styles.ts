import getCurrentColor from '../../../utils/getCurrentColor'
import { Dimensions, StyleSheet } from 'react-native'

const ScreenHeight = Dimensions.get('window').height

const AppRatingModalStyles = StyleSheet.create({
  'app-rating-modal': {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  'app-rating-modal__cell': {
    marginTop: ScreenHeight / 3,
    backgroundColor: getCurrentColor('color-background-primary'),
    width: '100%',
    height: 94,
    borderRadius: 20,

    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  'app-rating-modal__stars-wrapper': {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default AppRatingModalStyles
