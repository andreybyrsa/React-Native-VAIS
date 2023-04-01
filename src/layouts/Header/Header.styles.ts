import { StyleSheet } from 'react-native';


const HeaderStyles = StyleSheet.create({
  header: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 16,

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