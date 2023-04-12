import { onBoarding1, onBoarding2, onBoarding3, onBoarding4 } from '../../../assets/images'
import SlideType from '../../types/SlideType'
import getCurrentColor from '../../utils/getCurrentColor'
import ImageComponent from '../ImageComponent'
import Typography from '../Typography'
import OnBoardingSwiperStyles from './OnBoardingSwiper.styles'
import OnBoardingSwiperTypes from './OnBoardingSwiper.types'
import { useRef, useState } from 'react'
import Onboarding from 'react-native-onboarding-swiper'

const slidesContent: SlideType[] = [
  {
    image: onBoarding1,
    title: 'Авторизация',
    subtitle: 'Чтобы всегда быть на стиле, пройди простую регистрацию и создай свой профиль',
  },
  {
    image: onBoarding2,
    title: 'Креатив',
    subtitle: 'Найди для себя новый образ или поделись с миром своим вкусом и стилем',
  },
  {
    image: onBoarding3,
    title: 'Нейросеть',
    subtitle:
      'Первый шаг для создания своего нового образа поможет сделать искусственный интеллект',
  },
  {
    image: onBoarding4,
    title: 'Любимое',
    subtitle: 'Закрепляй самые любимые стили у себя в избранных, чтобы никогда их не потерять',
  },
]

function OnBoadringSwiper({ slideIndex = 0 }: OnBoardingSwiperTypes) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0)
  const SwiperRef = useRef<Onboarding | any>(null)

  const OnBoarding = (
    <Onboarding
      ref={SwiperRef}
      showPagination={false}
      bottomBarHeight={0}
      containerStyles={OnBoardingSwiperStyles['on-boarding-swiper']}
      imageContainerStyles={OnBoardingSwiperStyles['on-boarding-swiper__image-container']}
      pages={slidesContent.map((elem: SlideType) => ({
        backgroundColor: getCurrentColor('color-background-primary'),
        image: (
          <ImageComponent
            style={OnBoardingSwiperStyles['on-boarding-swiper__image']}
            imageSrc={elem.image}
            alt="on-boarding-image"
          />
        ),
        title: (
          <Typography
            style={OnBoardingSwiperStyles['on-boarding-swiper__title']}
            variant="title-2"
            color="color-text-primary"
          >
            {elem.title}
          </Typography>
        ),
        subtitle: (
          <Typography
            style={OnBoardingSwiperStyles['on-boarding-swiper__subtitle']}
            variant="text-3"
            color="color-text-primary"
          >
            {elem.subtitle}
          </Typography>
        ),
      }))}
    />
  )

  if (slideIndex - currentSlideIndex === 1) {
    SwiperRef?.current?.goToPage(slideIndex, true)
    setCurrentSlideIndex((prevState) => prevState + 1)
  }

  return OnBoarding
}

export default OnBoadringSwiper
