import { onBoarding1, onBoarding2, onBoarding3, onBoarding4 } from '../../../assets/images'
import Footer from '../../layouts/Footer'
import Header from '../../layouts/Header'
import SlideType from '../../types/SlideType'
import getCurrentColor from '../../utils/getCurrentColor'
import Button from '../Button'
import ImageComponent from '../ImageComponent'
import Typography from '../Typography'
import { useNavigation } from '@react-navigation/native'
import { useMemo, useState } from 'react'
import { TouchableHighlight, View } from 'react-native'
import { OnboardFlow } from 'react-native-onboard'

const slidesContent: SlideType[] = [
  {
    id: '0',
    imageComponent: (
      <ImageComponent
        style={{ width: 375, height: 375 }}
        imageSrc={onBoarding1}
        alt="on-bparding-1"
      />
    ),
    title: <Typography variant="title-2">Авторизация</Typography>,
    subtitle: (
      <Typography
        variant="text-3"
        color="color-text-primary"
      >
        Чтобы всегда быть на стиле, пройди простую регистрацию и создай свой профиль
      </Typography>
    ),
  },
  {
    id: '1',
    imageComponent: (
      <ImageComponent
        style={{ width: 375, height: 375 }}
        imageSrc={onBoarding2}
        alt="on-bparding-2"
      />
    ),
    title: <Typography variant="title-2">Креатив</Typography>,
    subtitle: (
      <Typography
        variant="text-3"
        color="color-text-primary"
      >
        Найди для себя новый образ или поделись с миром своим вкусом и стилем
      </Typography>
    ),
  },
  {
    id: '2',
    imageComponent: (
      <ImageComponent
        style={{ width: 375, height: 375 }}
        imageSrc={onBoarding3}
        alt="on-bparding-3"
      />
    ),
    title: <Typography variant="title-2">Нейросеть</Typography>,
    subtitle: (
      <Typography
        variant="text-3"
        color="color-text-primary"
      >
        Первый шаг для создания своего нового образа поможет сделать искусственный интеллект
      </Typography>
    ),
  },
  {
    id: '3',
    imageComponent: (
      <ImageComponent
        style={{ width: 375, height: 375 }}
        imageSrc={onBoarding4}
        alt="on-bparding-4"
      />
    ),
    title: (
      <Typography
        variant="title-2"
        color="color-text-primary"
      >
        Любимое
      </Typography>
    ),
    subtitle: (
      <Typography
        variant="text-3"
        color="color-text-primary"
      >
        Закрепляй самые любимые стили у себя в избранных, чтобы никогда их не потерять
      </Typography>
    ),
  },
]

function OnBoadringSwiper() {
  const naviation = useNavigation()

  const navigateToAuth = () => {
    naviation.navigate('auth' as never)
  }

  const header = useMemo(() => {
    return (
      <Header
        rightSideSlot={
          <TouchableHighlight
            onPress={navigateToAuth}
            underlayColor="transparent"
          >
            <Typography variant="text-2">Пропустить</Typography>
          </TouchableHighlight>
        }
      />
    )
  }, [])
  const footer = useMemo(() => {
    return (
      <Footer style={{paddingHorizontal: 0}}>
        <Button>Продолжить</Button>
      </Footer>
    )
  }, [])

  return (
    <OnboardFlow
      style={{ backgroundColor: getCurrentColor('color-background-primary') }}
      pageStyle={{ marginTop: 8 }}
      pages={slidesContent}
      HeaderComponent={() => header}
      PrimaryButtonComponent={() => footer}
      paginationSelectedColor={getCurrentColor('color-background-secondary')}
      paginationColor={getCurrentColor('color-background-light')}
    />
  )
}

export default OnBoadringSwiper
