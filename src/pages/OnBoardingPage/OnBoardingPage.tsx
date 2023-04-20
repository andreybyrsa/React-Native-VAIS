import Button from '../../components/Button'
import OnBoadringSwiper from '../../components/OnBoardingSwiper'
import Typography from '../../components/Typography'
import Footer from '../../layouts/Footer'
import Header from '../../layouts/Header'
import PageLayout from '../../layouts/PageLayout'
import OnBoardingPageStyles from './OnBoardingPage.styles'
import { useNavigation } from '@react-navigation/native'
import { useMemo, useState } from 'react'
import { TouchableHighlight } from 'react-native'

function OnBoardingPage() {
  const [slideIndex, setSlideIndex] = useState<number>(0)
  const naviation = useNavigation()

  const navigateToAuth = () => {
    naviation.navigate('/auth' as never)
  }

  const slideNext = () => {
    setSlideIndex((prevState) => prevState + 1)
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
      <Footer>
        {slideIndex === 3 ? (
          <Button onClick={navigateToAuth}>Начать</Button>
        ) : (
          <Button onClick={slideNext}>Продолжить</Button>
        )}
      </Footer>
    )
  }, [slideIndex])

  return (
    <PageLayout
      header={header}
      footer={footer}
      contentStyle={OnBoardingPageStyles['on-boarding-page__content']}
      scroll={false}
    >
      <OnBoadringSwiper slideIndex={slideIndex} />
    </PageLayout>
  )
}

export default OnBoardingPage
