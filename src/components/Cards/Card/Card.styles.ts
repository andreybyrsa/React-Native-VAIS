import { StyleSheet } from "react-native"
import getCurrentColor from "../../../utils/getCurrentColor"

const CardStyle = StyleSheet.create({
   'card': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'column',

      width: '100%',
      height: 315,
   },
   'card__images': {
      display: 'flex',
      justifyContent: 'center',

      width: '100%',
      maxHeight: 250,

      borderRadius: 20,
      borderBottomStartRadius: 0,
      borderBottomEndRadius: 0,

      backgroundColor: getCurrentColor('color-image-primary'),

      flexWrap: 'wrap',
   },
   'card__info': {
      display: 'flex',
      justifyContent: 'center',

      width: '100%',
      minHeight: 60,

      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      borderBottomStartRadius: 20,
      borderBottomEndRadius: 20,

      backgroundColor: getCurrentColor('color-background-dark_light'),
      paddingVertical: 10,
      paddingHorizontal: 10,
   },
})

export default CardStyle