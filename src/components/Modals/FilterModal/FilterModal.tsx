import PageLayout from '../../../layouts/PageLayout'
import FiltersType from '../../../types/FiltersType'
import Button from '../../Buttons/Button'
import CheckBox from '../../Input/CheckBox'
import Typography from '../../Typography'
import DefaultModal from '../DefaultModal'
import FilterModalStyles from './FilterModal.styles'
import FilterModalProps from './FilterModal.types'
import { TouchableHighlight, View } from 'react-native'

const Filters: FiltersType[] = [
  {
    id: 0,
    text: 'По популярности',
  },
  {
    id: 1,
    text: 'По рейтингу',
  },
  {
    id: 2,
    text: 'По цене min',
  },
  {
    id: 3,
    text: 'По цене max',
  },
]

function FilterModal({
  opened,
  setOpened,

  activeFilter,
  setActiveFilter,
}: FilterModalProps) {
  const setActiveCheckBox = (index: number) => {
    setActiveFilter(index)
  }

  const resetFilters = () => {
    setActiveFilter(null)
    setTimeout(() => setOpened(false), 250)
  }

  return (
    <DefaultModal
      opened={opened}
      setOpened={setOpened}
      animationType="fade"
    >
      <PageLayout style={FilterModalStyles['filter-modal']}>
        <View style={FilterModalStyles['filter-modal__filters']}>
          {[
            Filters.map((elem) => (
              <TouchableHighlight
                key={elem.id}
                underlayColor="transparent"
                activeOpacity={1}
                onPress={() => setActiveCheckBox(elem.id)}
              >
                <View style={FilterModalStyles['filter-modal__filter']}>
                  <CheckBox active={activeFilter === elem.id} />
                  <Typography>{elem.text}</Typography>
                </View>
              </TouchableHighlight>
            )),
          ]}
          <Button onPress={resetFilters}>Сбросить фильтры</Button>
        </View>
      </PageLayout>
    </DefaultModal>
  )
}

export default FilterModal
