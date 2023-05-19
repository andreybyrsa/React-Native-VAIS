import IconComponent from '../../Icons/IconComponent'
import Typography from '../../Typography'
import FilterButtonStyles from './FilterButton.styles'
import FilterButtonProps from './FilterButton.types'
import { TouchableHighlight, View } from 'react-native'

function FilterButton({ onPress }: FilterButtonProps) {
  return (
    <TouchableHighlight
      underlayColor="transparent"
      activeOpacity={1}
      onPress={onPress}
    >
      <View style={FilterButtonStyles['filter-button__content']}>
        <IconComponent
          iconName="cog"
          size={35}
        />
        <Typography variant="text-2">Фильтры</Typography>
      </View>
    </TouchableHighlight>
  )
}

export default FilterButton
