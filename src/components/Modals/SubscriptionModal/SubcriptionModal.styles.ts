import getCurrentColor from '../../../utils/getCurrentColor'
import { Dimensions, StyleSheet } from 'react-native'

const ScreenHeight = Dimensions.get('window').height

const SubcriptionModalStyles = StyleSheet.create({
  'subcription-modal': {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  'subcription-modal__info': {
    marginTop: ScreenHeight / 13,
    alignItems: 'center',
    width: '100%',
    height: 562,
    backgroundColor: getCurrentColor('color-background-primary'),
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,

    gap: 10,
  },
  'subcription-modal__title': {
   textAlign: 'center',
   width: 280,
  },
  'subcription-modal__button': {
   marginTop: 10,
  },
})

export default SubcriptionModalStyles
