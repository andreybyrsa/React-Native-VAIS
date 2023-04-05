import { ColorsType } from '../../assets/styles/colors/colors'
import Colors from '../../assets/styles/colors/colors'

const getCurrentColor = (colorName: ColorsType) => {
  return Colors[colorName]
}

export default getCurrentColor
