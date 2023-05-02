import { StyleSheet } from 'react-native'

const DevPageStyles = StyleSheet.create({
  'dev-page__content': {
    display: 'flex',
    gap: 8,
  },
  'dev-page__cards': {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: 160,
      maxWidth: '100%',
      gap: 20, 
  },
})

export default DevPageStyles
