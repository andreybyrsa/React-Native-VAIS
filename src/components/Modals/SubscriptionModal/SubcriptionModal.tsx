import { logo } from '../../../../assets/images'
import PageLayout from '../../../layouts/PageLayout'
import Button from '../../Button'
import Cell from '../../Cell'
import IconComponent from '../../IconComponent'
import ImageComponent from '../../ImageComponent'
import Typography from '../../Typography'
import DefaultModal from '../DefaultModal'
import SubcriptionModalStyles from './SubcriptionModal.styles'
import SubcriptoinModalprops from './SubcriptionModal.types'
import { TouchableHighlight, View } from 'react-native'

function SubcriptionModal({ opened, setOpened }: SubcriptoinModalprops) {
  const cellInfo = [
    {
      id: 0,
      iconName: 'star',
      subtitle: 'Индивидуальные рекомендации',
      text: 'Какой-то текст, который описывает заголовок',
    },
    {
      id: 1,
      iconName: 'cog',
      subtitle: 'Разнообразие вариантов',
      text: 'Какой-то текст, который описывает заголовок',
    },
    {
      id: 2,
      iconName: 'ios-heart-outline',
      subtitle: 'Экономия времени',
      text: 'Какой-то текст, который описывает заголовок',
    },
    {
      id: 3,
      iconName: 'ios-person-outline',
      subtitle: 'Удобство',
      text: 'Какой-то текст, который описывает заголовок',
    },
  ]

  return (
    <DefaultModal
      animationType="fade"
      opened={opened}
      setOpened={setOpened}
    >
      <PageLayout style={SubcriptionModalStyles['subcription-modal']}>
        <View style={SubcriptionModalStyles['subcription-modal__info']}>
          <ImageComponent
            imageSrc={logo}
            alt="logo"
          />
          <View>
            <Typography
              variant="title-2"
              style={SubcriptionModalStyles['subcription-modal__title']}
            >
              Virtual AI Stylist
            </Typography>
            <Typography
              variant="text-6"
              style={SubcriptionModalStyles['subcription-modal__title']}
            >
              Какая-то мега-крутая мотивационная речь о том, какое это крутое приложение
            </Typography>
          </View>
          {cellInfo.map((elem) => (
            <Cell
              disabled
              before={
                <IconComponent
                  iconName={elem.iconName}
                  size={35}
                />
              }
              key={elem.id}
              subtitle={elem.subtitle}
              text={elem.text}
            />
          ))}
          <Button style={SubcriptionModalStyles['subcription-modal__button']}>
            Оплата 349р/мес
          </Button>
        </View>
      </PageLayout>
    </DefaultModal>
  )
}

export default SubcriptionModal
