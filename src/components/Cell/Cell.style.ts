import { StyleSheet } from 'react-native'
import { fixedHeight } from '../../../assets/styles/mixins/mixins'

const CellStyle = StyleSheet.create({
   'cell--primary': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',

      backgroundColor: '#C3CFD7',

      width: "100%",
      borderBottomWidth: 1,
      borderTopWidth: 1,
      paddingHorizontal: 8,
      paddingVertical: 5,
      ...fixedHeight({ size: 60 }),
   },
   'cell--secondary': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',

      backgroundColor: '#02202B',
      borderColor: '#00E4FF',

      width: "100%",
      borderBottomWidth: 2,
      borderTopWidth: 2,
      paddingHorizontal: 8,
      paddingVertical: 8,
      ...fixedHeight({ size: 60 }),
   },
   'cell__text-primary': {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      paddingHorizontal: 8,
      paddingVertical: 0,
      textAlign: 'left',
   },
   'cell__text-secondary': {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      paddingHorizontal: 8,
      paddingVertical: 0,
      textAlign: 'left',
      color: '#00E4FF',
   },
   'cell-button': {
      width: '100%',
   },
   'cell-active--primary': {
      backgroundColor: '#8AA7BB',
   },
   'cell-active--secondary': {
      backgroundColor: '#FFFFFF',
   },
   'cell-disabled--secondary': {
      backgroundColor: '#8AA7BB',
   },
   'cell-disabled--primary': {
      backgroundColor: '#A5B0B7',
   },
})

export default CellStyle