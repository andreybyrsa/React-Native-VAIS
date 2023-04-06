import { Colors, ColorsType } from '../../assets/styles/colors/colors'

const getCurrentColor = (colorName: ColorsType) => {
  return Colors[colorName]
}

export default getCurrentColor
