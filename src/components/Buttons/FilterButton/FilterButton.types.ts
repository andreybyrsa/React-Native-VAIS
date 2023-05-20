import { GestureResponderEvent } from 'react-native'

interface FilterButtonProps {
  onPress?: ((event: GestureResponderEvent) => void) | undefined
  isFiltered?: boolean
}

export default FilterButtonProps
