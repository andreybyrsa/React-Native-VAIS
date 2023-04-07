import { Text, TouchableHighlight, View } from "react-native"
import CellProps from "./Cell.types"
import Typography from "../Typography"
import CellStyle from "./Cell.style"
import { useState } from "react"

function Cell({
   style,
   title, 
   subtitle, 
   text, 
   onClick = () => null, 
   disabled = false,
   before,
   after,
   type = 'primary',
}: CellProps) {
   const [isPressed, setIsPressed] = useState<boolean>(false) 

   const onHandlerFocus = () => {
      setIsPressed(true)
    }
   const onHandlerBlur = () => {
      setIsPressed(false)
    }

   return(
      <TouchableHighlight
         style={[
            CellStyle['cell-button'], 
            style,
         ]}
         activeOpacity={1}
         underlayColor="transparent"
         onPress={onClick}
         onHideUnderlay={onHandlerBlur}
         onShowUnderlay={onHandlerFocus}
      >
         <View 
            style={[
               CellStyle[`cell--${type}`],
               isPressed && CellStyle[`cell-active--${type}`],
               disabled && CellStyle[`cell-disabled--${type}`], 
               style,
            ]}
         >
            {before}
            <Text style={[CellStyle[`cell__text-${type}`], style]}>
               <Typography variant='title-3'>{title}</Typography>
               <Typography variant='title-6'>{subtitle}</Typography>
               <Typography variant='text-6'>{text}</Typography>
            </Text>
            {after}
         </View>
      </TouchableHighlight> 
   )
}

export default Cell