import { fixedHeight } from '../../../assets/styles/mixins/mixins'
import getCurrentColor from '../../utils/getCurrentColor'
import { StyleSheet } from 'react-native'

const CellStyle = StyleSheet.create({
  cell: {
    backgroundColor: getCurrentColor('color-background-primary'),
    width: '100%',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 5,
    ...fixedHeight({ size: 60 }),

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cell__text: {
    paddingHorizontal: 8,
    paddingVertical: 0,

    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  'cell-button': {
    width: '100%',
  },
  'cell-active': {
    backgroundColor: getCurrentColor('color-background-primary_active'),
  },
  'cell-disabled': {
    backgroundColor: getCurrentColor('color-background-primary'),
  },
})

export default CellStyle
