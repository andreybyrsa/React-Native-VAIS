import { StyleSheet } from 'react-native';


const FooterStyles = StyleSheet.create({
  footer: {
    backgroundColor: '#C3CFD7',
    paddingTop: 16,
    paddingHorizontal: 20,
    paddingBottom: 0,

    display: 'flex',
    gap: 8,
  },
  'footer--is-navigation': {
    paddingTop: 16,
    paddingHorizontal: 0,
    paddingBottom: 0,
  },
})

export default FooterStyles