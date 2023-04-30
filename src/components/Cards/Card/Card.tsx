import CardProps from "./Card.types";
import ImageComponent from "../../ImageComponent";
import { View } from "react-native";
import Typography from "../../Typography";

function Card({style, cardName, imageSrces, date}: CardProps){
   return(
      <View>
         <View>
            {imageSrces.map((elem, index) => (
               <ImageComponent
                  key={index}
                  imageSrc={elem}
                  style={{ width: 80, height: 80 }}
                  alt="img-clothes"
               />
            ))}
         </View>
         <View>
            <Typography>
               {cardName}
            </Typography>
            <Typography>
               {date}
            </Typography>
         </View>
      </View>
   )
}

export default Card