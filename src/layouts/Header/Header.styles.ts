import getCurrentColor from '../../utils/getCurrentColor';
import { StyleSheet } from 'react-native';


const HeaderStyles = StyleSheet.create({
  header: {
    backgroundColor: getCurrentColor('color-background-primary'),
    width: '100%',
    paddingVertical: 16,
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