import { StyleSheet } from 'react-native';


const HeaderStyles = StyleSheet.create({
  header: {
    backgroundColor: '#C3CFD7',
    width: '100%',
    paddingTop: 0,
    paddingHorizontal: 20,
    paddingBottom: 16,

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