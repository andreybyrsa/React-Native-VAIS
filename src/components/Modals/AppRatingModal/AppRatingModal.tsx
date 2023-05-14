import { ColorsType } from '../../../../assets/styles/colors/colors'
import PageLayout from '../../../layouts/PageLayout'
import IconComponent from '../../IconComponent'
import Typography from '../../Typography'
import DefaultModal from '../DefaultModal'
import AppRatingModalStyles from './AppRatingModal.styles'
import AppRatingModalProps from './AppRatingModal.types'
import { useState } from 'react'
import { TouchableHighlight, View } from 'react-native'

function AppRatingModal({ opened, setOpened }: AppRatingModalProps) {
  const [rating, setRating] = useState<number>(0)

  const getCurrentRating = (elemIndex: number) => {
    setRating(elemIndex + 1)
    setTimeout(() => setOpened(false), 500)
  }

  const getCurrentStarColor = (elemIndex: number): ColorsType => {
    return elemIndex + 1 <= rating ? 'color-background-secondary' : 'color-background-light'
  }

  return (
    <DefaultModal
      animationType="fade"
      opened={opened}
      setOpened={setOpened}
    >
      <PageLayout style={AppRatingModalStyles['app-rating-modal']}>
        <View style={AppRatingModalStyles['app-rating-modal__cell']}>
          <Typography variant="title-3">{'Ваше стильное мнение :)'}</Typography>
          <View style={AppRatingModalStyles['app-rating-modal__stars-wrapper']}>
            {[...Array(5)].map((elem, index) => (
              <TouchableHighlight
                underlayColor="transparent"
                activeOpacity={1}
                onPress={() => getCurrentRating(index)}
              >
                <IconComponent
                  key={`star-${index}`}
                  iconName="star"
                  size={35}
                  color={getCurrentStarColor(index)}
                />
              </TouchableHighlight>
            ))}
          </View>
        </View>
      </PageLayout>
    </DefaultModal>
  )
}

export default AppRatingModal
