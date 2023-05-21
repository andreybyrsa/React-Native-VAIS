import { StyleSheet } from 'react-native'

const DevPageStyles = StyleSheet.create({
  'dev-page__content': {
    alignItems: 'center',
  },
  'dev-page__cards': {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent:'space-between',
      width: '100%',
      maxWidth: 350,
      gap: 20,
  },
})

export default DevPageStyles
