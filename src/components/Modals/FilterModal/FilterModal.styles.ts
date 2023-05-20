import getCurrentColor from '../../../utils/getCurrentColor'
import { Dimensions, StyleSheet } from 'react-native'

const ScreenHeight = Dimensions.get('window').height

const FilterModalStyles = StyleSheet.create({
  'filter-modal': {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  'filter-modal__filters': {
    width: '100%',
    padding: 16,
    marginTop: ScreenHeight / 3.5,
    backgroundColor: getCurrentColor('color-background-primary'),
    borderRadius: 20,

    gap: 16,
  },
  'filter-modal__filter': {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
  },
})

export default FilterModalStyles
