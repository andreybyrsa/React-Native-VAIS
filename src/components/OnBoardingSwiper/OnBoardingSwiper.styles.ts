import getCurrentColor from '../../utils/getCurrentColor'
import { StyleSheet } from 'react-native'

const OnBoardingSwiperStyles = StyleSheet.create({
  'on-boarding-swiper': {
    paddingHorizontal: 20,
    marginTop: -16,
    backgroundColor: getCurrentColor('color-background-primary'),

    justifyContent: 'flex-start',
  },
  'on-boarding-swiper__image-container': {
    maxHeight: 375,
    maxWidth: 375,
    paddingBottom: 0,

    flex: 1,
  },
  'on-boarding-swiper__image': {
    width: '100%',
    height: '100%',
  },
  'on-boarding-swiper__title': {
    marginTop: -16,
    marginBottom: 8,
  },
  'on-boarding-swiper__subtitle': {
    textAlign: 'center',
  },
})

export default OnBoardingSwiperStyles
