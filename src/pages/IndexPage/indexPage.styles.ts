import { StyleSheet } from 'react-native'

const indexPageStyles = StyleSheet.create({
   'indexPageStyles': {
      alignItems: 'center',
   },
   'indexPageStyles-cards':{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',

      width: '100%',
      maxWidth: 340,
      
      gap: 20,
   },
})

export default indexPageStyles