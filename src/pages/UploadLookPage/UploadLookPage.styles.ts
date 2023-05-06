import { Dimensions, StyleSheet } from 'react-native'

const screenHeight = Dimensions.get('window').height

const UploadLookPageStyles = StyleSheet.create({
  'upload-look-page': {
    position: 'relative',

    backgroundColor: 'transparent',

    flex: 1,
  },
  'upload-look-page__content': {
    marginTop: screenHeight / 4,

    justifyContent: 'center',
    alignItems: 'center',
  },
  'upload-look-page-background': {
    flex: 1,
  },
  'upload-look-page__footer': {
    backgroundColor: 'transparent',
    paddingTop: 0,
  },
})

export default UploadLookPageStyles
