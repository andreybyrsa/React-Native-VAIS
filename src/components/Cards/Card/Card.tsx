import IconComponent from '../../Icons/IconComponent'
import ImageComponent from '../../ImageComponent'
import Typography from '../../Typography'
import CardStyle from './Card.styles'
import CardProps from './Card.types'
import { View } from 'react-native'

function Card({ style, cardName, imageSrces, date, cardPrice, isLookCard = false }: CardProps) {
  return (
    <View>
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
      </View>

      <View style={[CardStyle['card__info']]}>
        {isLookCard ? (
          <View>
            <Typography
              variant="text-5"
              color="color-text-tertiary"
            >
              {cardPrice}
            </Typography>
            <Typography
              style={{ textAlign: 'center' }}
              variant="text-5"
              color="color-text-tertiary"
            >
              {cardName}
            </Typography>
            <View style={CardStyle['card__isLookCard']}>
              <View style={CardStyle['card__isLookCard']}>
                <IconComponent
                  iconName="star"
                  size={15}
                />
                <IconComponent
                  iconName="star"
                  size={15}
                />
                <IconComponent
                  iconName="star"
                  size={15}
                />
                <IconComponent
                  iconName="star"
                  size={15}
                />
                <IconComponent
                  iconName="star"
                  size={15}
                />
              </View>
              <View>
                <IconComponent
                  iconName="ios-heart-outline"
                  size={15}
                />
              </View>
            </View>
          </View>
        ) : (
          <View>
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
        )}
      </View>
    </View>
  )
}

export default Card
