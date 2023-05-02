import { StyleSheet } from "react-native"
import getCurrentColor from "../../../utils/getCurrentColor"

const HorizontalCardStyle = StyleSheet.create({
   'HorizontalCard': {

   },
   'HorizontalCard__clothes-content--primary': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',

      paddingHorizontal: 10,
      paddingVertical: 10,
      borderRadius: 20,
      
      width: '100%',
      height: 110,

      backgroundColor: getCurrentColor('color-background-light')
   },
   'HorizontalCard__clothes-content--secondary': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',

      paddingHorizontal: 10,
      paddingVertical: 10,
      borderRadius: 20,
      
      width: '100%',
      height: 110,

      backgroundColor: getCurrentColor('color-background-dark'),
      borderColor: getCurrentColor('color-border-secondary_enable'),
      borderWidth: 2,
   },
   'HorizontalCard__image': {
      width: '40%',
   },
   'HorizontalCard__infoCard--primary': {
      marginVertical: 2,
   },
   'HorizontalCard__infoCard--secondary': {
      marginVertical: 2,
      color: getCurrentColor('color-text-secondary'),
   }
})

export default HorizontalCardStyle