import { fixedHeight } from '../../../../assets/styles/mixins/mixins'
import getCurrentColor from '../../../utils/getCurrentColor'
import { StyleSheet } from 'react-native'

const NavigationSideBarStyles = StyleSheet.create({
  'navigation-side-bar': {
    width: '100%',
    ...fixedHeight({ size: 55 }),
    backgroundColor: getCurrentColor('color-background-secondary'),

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

export default NavigationSideBarStyles
