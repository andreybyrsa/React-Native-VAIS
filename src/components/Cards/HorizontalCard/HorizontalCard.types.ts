import { ViewStyle } from 'react-native'

type cardInfoTypes = {
   clothesName: string
   clothesColor: string
   clothesGender: string
 }

interface HorizontalCardProps {
  style?: ViewStyle

  type?: 'primary' | 'secondary'

  imageSrc?: string
  cardInfo?: cardInfoTypes
  links?: string[]
}

export default HorizontalCardProps
