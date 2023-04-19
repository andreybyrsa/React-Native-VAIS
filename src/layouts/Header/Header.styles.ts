import getCurrentColor from '../../utils/getCurrentColor'
import { Platform, StatusBar, StyleSheet } from 'react-native'

const HeaderStyles = StyleSheet.create({
  header: {
    backgroundColor: getCurrentColor('color-background-primary'),
    width: '100%',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 8,
    paddingBottom: 16,
    paddingHorizontal: 20,

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  'header__left-side-slot': {
    display: 'flex',
    alignItems: 'center',
  },
  'header__right-side-slot': {
    display: 'flex',
    alignItems: 'center',
  },
})

export default HeaderStyles
