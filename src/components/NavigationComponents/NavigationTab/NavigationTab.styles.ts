import { fixedHeight } from '../../../../assets/styles/mixins/mixins'
import { StyleSheet } from 'react-native'

const NavigationTabStyles = StyleSheet.create({
  'navigation-tab': {
    ...fixedHeight({ size: 48 }),
    minWidth: 60,
    width: 80,
    backgroundColor: 'transparent',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  'navigation-tab__button': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
})

export default NavigationTabStyles
