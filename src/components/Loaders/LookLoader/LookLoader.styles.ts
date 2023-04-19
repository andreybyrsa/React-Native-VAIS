import { StyleSheet } from "react-native"
import getCurrentColor from "../../../utils/getCurrentColor"

const LookLoaderStyles = StyleSheet.create({
   'lookLoaderBackground__enabled': {
      position: 'absolute',
      zIndex: -1,
      width: '100%',
      height: '100%',
   },
   'lookLoaderBackground__active': {
      height: '100%',
   }
})

export default LookLoaderStyles