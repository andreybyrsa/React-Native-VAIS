import ImageComponent from '../../ImageComponent'
import Typography from '../../Typography'
import CardStyle from './Card.styles'
import CardProps from './Card.types'
import { View } from 'react-native'

function Card({ style, cardName, imageSrces, date }: CardProps) {
  return (
    <View style={[CardStyle['card'], style]}>
      <View style={[CardStyle['card__images'], style]}>
        {imageSrces.map((elem, index) => (
          <ImageComponent
            key={index}
            imageSrc={elem}
            style={{ width: 80, height: 80 }}
            alt="img-clothes"
          />
        ))}
      </View>
      <View style={[CardStyle['card__info']]}>
        <Typography
          style={{ textAlign: 'center' }}
          variant="text-5"
          color="color-text-tertiary"
        >
          {cardName}
        </Typography>
        <Typography
          style={{ textAlign: 'center' }}
          variant="text-5"
          color="color-text-tertiary"
        >
          {date}
        </Typography>
      </View>
    </View>
  )
}

export default Card
