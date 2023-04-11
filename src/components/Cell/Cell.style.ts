import { fixedHeight } from '../../../assets/styles/mixins/mixins'
import { StyleSheet } from 'react-native'

const CellStyle = StyleSheet.create({
  'cell': {
    display: 'flex',
    flexDirection: 'row',

    justifyContent: 'space-between',
    alignItems: 'center',

    backgroundColor: '#C3CFD7',

    width: '100%',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 5,
    ...fixedHeight({ size: 60 }),
  },
  'cell__text': {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 8,
    paddingVertical: 0,
  },
  'cell-button': {
    width: '100%',
  },
  'cell-active': {
    backgroundColor: '#8AA7BB',
  },
  'cell-disabled': {
    backgroundColor: '#A5B0B7',
  },
})

export default CellStyle
