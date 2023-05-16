import ImageComponent from '../../ImageComponent'
import Typography from '../../Typography'
import HorizontalCardStyle from './HorizontalCard.styles'
import HorizontalCardProps from './HorizontalCard.types'
import { useState } from 'react'
import { View } from 'react-native'

function HorizontalCard({
  style,
  type = 'primary',
  imageSrc,
  links,
  cardInfo = {
    clothesName: 'Классический пиджак',
    clothesColor: 'Черный',
    clothesGender: 'Мужской',
  },
}: HorizontalCardProps) {
  const CardDescription = Object.values(cardInfo).sort((a, b) => {
    if (a === cardInfo?.clothesColor && b) {
      return -1
    } else if (b === cardInfo?.clothesGender && a) {
      return -1
    }
    return 0
  })

  const [isOpened, setIsOpened] = useState<boolean>(false)

  const onHandlerOpen = () => {
    setIsOpened((prevState) => !prevState)
  }

  return (
    <View
      onTouchStart={onHandlerOpen}
      style={[HorizontalCardStyle['HorizontalCard'], style]}
    >
      <View style={[HorizontalCardStyle[`HorizontalCard__clothes-content--${type}`]]}>
        <View style={[HorizontalCardStyle['HorizontalCard__image']]}>
          <ImageComponent
            style={{ width: 100, height: 100 }}
            imageSrc={imageSrc}
            alt="clothes"
          />
        </View>
        <View>
          {CardDescription.map((elem, index) => (
            <Typography
              style={[HorizontalCardStyle[`HorizontalCard__infoCard--${type}`]]}
              key={index}
              variant="title-4"
            >
              {elem}
            </Typography>
          ))}
        </View>
      </View>
      <View></View>
    </View>
  )
}

export default HorizontalCard
