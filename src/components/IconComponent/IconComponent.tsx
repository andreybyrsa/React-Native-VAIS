import IconComponentProps from "./IconComponent.types";
import Icon from 'react-native-vector-icons/Ionicons';
import IconComponentStyles from "./IconComponent.styles";
import getCurrentColor from "../../utils/getCurrentColor";

function IconComponent({nameIcons ='home', size = 50, color = 'color-icon-primary'}: IconComponentProps) {
   return(
      <Icon 
         name={nameIcons} 
         size={size} 
         color={getCurrentColor(`${color}`)} 
         // style={[IconComponentStyles[`${nameIcons}`]]}
      />
   )
}

export default IconComponent

