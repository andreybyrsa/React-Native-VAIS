import { StyleSheet } from 'react-native'

const AuthPageStyles = StyleSheet.create({
  'auth-page__content': {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  'auth-page__inputs': {
    width: '100%',

    display: 'flex',
    gap: 20,
  },
  'auth-page__politics': {
    marginVertical: 15,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  'auth-page__icons': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25,
  },
})

export default AuthPageStyles
