import getCurrentColor from '../../../utils/getCurrentColor'
import { StyleSheet } from 'react-native'

const AppLoaderStyles = StyleSheet.create({
  'app-loader': {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,

    backgroundColor: getCurrentColor('color-background-dark'),

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
})

export default AppLoaderStyles
