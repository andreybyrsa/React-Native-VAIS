import getCurrentColor from '../../../utils/getCurrentColor'
import { StyleSheet } from 'react-native'

const CheckBoxStyles = StyleSheet.create({
  'check-box': {
    width: 30,
    height: 30,
    borderRadius: 50,

    alignItems: 'center',
    justifyContent: 'center',
  },
  'check-box__content-circle': {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: getCurrentColor('color-background-primary'),
  },

  'check-box--disabled': {
    backgroundColor: getCurrentColor('color-background-primary_active'),
  },
  'check-box--enabled': {
    backgroundColor: getCurrentColor('color-background-secondary'),
  },
})

export default CheckBoxStyles
