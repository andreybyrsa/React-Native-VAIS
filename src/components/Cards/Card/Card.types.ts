import { ViewStyle } from "react-native";

interface CardProps {
   style?: ViewStyle

   isLookCard?: boolean

   cardName?: string
   cardPrice?: string
   imageSrces: string[]
   date?: string
}

export default CardProps