import Button from '../../components/Buttons/Button'
import UserLoader from '../../components/Loaders/UserLoader'
import OnBoadringSwiper from '../../components/OnBoardingSwiper'
import Typography from '../../components/Typography'
import { User } from '../../domain/User'
import useAuth from '../../hooks/useAuth'
import Footer from '../../layouts/Footer'
import Header from '../../layouts/Header'
import PageLayout from '../../layouts/PageLayout'
import { setUserByLocaleStorage } from '../../store/reducers/user/UserReducer'
import OnBoardingPageStyles from './OnBoardingPage.styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useMemo, useState } from 'react'
import { TouchableHighlight } from 'react-native'
import { useDispatch } from 'react-redux'

function OnBoardingPage() {
  const [slideIndex, setSlideIndex] = useState<number>(0)

  const isAuth = useAuth()
  const naviation = useNavigation()

  const dispatch = useDispatch()

  const navigateToAuth = () => {
    naviation.navigate('/auth' as never)
  }

  const slideNext = () => {
    setSlideIndex((prevState) => prevState + 1)
  }

  useEffect(() => {
    ;(async () => {
      const storageUser = await AsyncStorage.getItem('@user')
      const currentUser: User = storageUser ? JSON.parse(storageUser) : ''
      if (currentUser.id) {
        dispatch(
          setUserByLocaleStorage({
            ...currentUser,
          }),
        )
      }
    })()
  }, [])

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
          <Button onPress={navigateToAuth}>Начать</Button>
        ) : (
          <Button onPress={slideNext}>Продолжить</Button>
        )}
      </Footer>
    )
  }, [slideIndex])

  if (isAuth) {
    return <UserLoader />
  }

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
