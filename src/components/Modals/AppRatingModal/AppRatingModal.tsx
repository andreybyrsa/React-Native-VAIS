import { ColorsType } from '../../../../assets/styles/colors/colors'
import PageLayout from '../../../layouts/PageLayout'
import { setAppRating } from '../../../store/reducers/app/AppReducer'
import AppSelector from '../../../store/reducers/app/AppSelector'
import IconComponent from '../../Icons/IconComponent'
import Typography from '../../Typography'
import DefaultModal from '../DefaultModal'
import AppRatingModalStyles from './AppRatingModal.styles'
import AppRatingModalProps from './AppRatingModal.types'
import { useState } from 'react'
import { TouchableHighlight, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

function AppRatingModal({ opened, setOpened }: AppRatingModalProps) {
  const [rating, setRating] = useState<number>(0)

  const appRaing = useSelector(AppSelector()).rating
  const dispatch = useDispatch()

  const getCurrentRating = (elemIndex: number) => {
    setRating(elemIndex)
    setTimeout(() => {
      dispatch(setAppRating(elemIndex))
      setOpened(false)
    }, 500)
  }

  const getCurrentStarColor = (elemIndex: number): ColorsType => {
    return elemIndex <= rating ? 'color-background-secondary' : 'color-background-light'
  }

  if (appRaing) {
    return <></>
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
            {[...Array(1, 2, 3, 4, 5)].map((elemIndex) => (
              <TouchableHighlight
                key={elemIndex}
                underlayColor="transparent"
                activeOpacity={1}
                onPress={() => getCurrentRating(elemIndex)}
              >
                <IconComponent
                  iconName="star"
                  size={35}
                  color={getCurrentStarColor(elemIndex)}
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
