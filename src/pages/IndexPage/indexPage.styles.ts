import { Dimensions, StyleSheet } from 'react-native'

const width = Dimensions.get('window').width

const IndexPageStyles = StyleSheet.create({
  'index-page__content': {
    alignSelf: 'center',
  },
  'index-page__cards': {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',

    gap: width < 385 ? 8 : 16,
  },
})

export default IndexPageStyles
