import getCurrentColor from '../../../utils/getCurrentColor';
import { StyleSheet } from 'react-native';


const UserLoaderStyles = StyleSheet.create({
  'user-loader': {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default UserLoaderStyles