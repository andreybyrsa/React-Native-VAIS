import { StyleSheet } from 'react-native'

const indexPageStyles = StyleSheet.create({
   'indexPageStyles': {
      // width: '100%',
      // display: 'flex',
      // justifyContent: 'space-between',
      // alignItems: 'flex-start',
   },
   'indexPageStyles-cards':{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',

      // justifyContent:'center',
      // justifyContent: 'space-between',
      // alignItems: 'flex-start',
      marginHorizontal: 10,

      maxWidth: '100%',
      gap: 20,
   },
})

export default indexPageStyles