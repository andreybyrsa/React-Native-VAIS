import { ColorsType } from '../../../../assets/styles/colors/colors'
import IconComponent from '../../Icons/IconComponent'
import Typography from '../../Typography'
import FilterButtonStyles from './FilterButton.styles'
import FilterButtonProps from './FilterButton.types'
import { TouchableHighlight, View } from 'react-native'

function FilterButton({ onPress, isFiltered }: FilterButtonProps) {
  const getComponentColor = (componentName: 'icon' | 'text'): ColorsType => {
    return isFiltered ? 'color-text-link' : `color-${componentName}-primary`
  }

  return (
    <TouchableHighlight
      underlayColor="transparent"
      activeOpacity={1}
      onPress={onPress}
    >
      <View style={FilterButtonStyles['filter-button__content']}>
        <IconComponent
          iconName="cog-outline"
          size={35}
          color={getComponentColor('icon')}
        />
        <Typography
          variant="text-2"
          color={getComponentColor('text')}
        >
          Фильтры
        </Typography>
      </View>
    </TouchableHighlight>
  )
}

export default FilterButton
