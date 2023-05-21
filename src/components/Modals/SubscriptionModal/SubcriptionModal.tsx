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
      iconName: 'md-bulb-outline',
      subtitle: 'Индивидуальные рекомендации',
      text: 'Получайте рекомендации первыми, узнавайте быстрее',
    },
    {
      id: 1,
      iconName: 'ios-menu',
      subtitle: 'Разнообразие вариантов',
      text: 'Найдите новые стили, необычные образы',
    },
    {
      id: 2,
      iconName: 'ios-time-outline',
      subtitle: 'Экономия времени',
      text: 'Сэкономьте свое время поиска нового стиля',
    },
    {
      id: 3,
      iconName: 'md-rocket-outline',
      subtitle: 'Удобство',
      text: 'Получите новые возможности для удобства работы с нами',
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
              Первое приложение, которое поможет оставаться на стиле и быть в тренде
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
