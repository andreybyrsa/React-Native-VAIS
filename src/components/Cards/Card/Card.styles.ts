import { StyleSheet } from "react-native"
import getCurrentColor from "../../../utils/getCurrentColor"

const CardStyle = StyleSheet.create({
   'card': {
      width: 165,
      height: 250,
      backgroundColor: getCurrentColor('color-image-primary'),

      borderRadius: 20,
      borderBottomStartRadius: 0,
      borderBottomEndRadius: 0,

      justifyContent: 'center',
   },
   'card__images': {
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
   },
   'card__info': {
      display: 'flex',
      justifyContent: 'center',

      width: 165,
      minHeight: 60,

      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      borderBottomStartRadius: 20,
      borderBottomEndRadius: 20,

      backgroundColor: getCurrentColor('color-background-dark_light'),
      paddingVertical: 10,
      paddingHorizontal: 10,
   },
   'card__isLookCard':{
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
})

export default CardStyle