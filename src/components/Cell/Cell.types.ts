import { ViewStyle } from "react-native";
import { GestureResponderEvent } from 'react-native/types';

interface CellProps {
   style?: ViewStyle

   before?: React.ReactNode
   after?: React.ReactNode

   title?: string
   subtitle?: string
   text?: string

   onClick?: ((event: GestureResponderEvent) => void) | undefined

   disabled?: boolean
}

export default CellProps