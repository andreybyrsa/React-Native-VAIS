import CheckBoxStyles from './CheckBox.styles'
import CheckBoxProps from './CheckBox.types'
import { View } from 'react-native'

function CheckBox({ active }: CheckBoxProps) {
  const isActive = active
    ? CheckBoxStyles['check-box--enabled']
    : CheckBoxStyles['check-box--disabled']

  return (
    <View style={[CheckBoxStyles['check-box'], isActive]}>
      <View style={CheckBoxStyles['check-box__content-circle']} />
    </View>
  )
}

export default CheckBox
