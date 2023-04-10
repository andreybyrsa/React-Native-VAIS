import getCurrentColor from '../../../utils/getCurrentColor'
import { StyleSheet } from 'react-native'

const NavigationSideBarStyles = StyleSheet.create({
  'navigation-side-bar': {
    width: '100%',
    backgroundColor: getCurrentColor('color-background-secondary'),

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

export default NavigationSideBarStyles
