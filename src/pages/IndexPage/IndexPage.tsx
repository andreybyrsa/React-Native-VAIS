import { jacket } from '../../../assets/images'
import Card from '../../components/Cards/Card'
import TouchableIcon from '../../components/Icons/TouchableIcon'
import NavigationSideBar from '../../components/NavigationComponents/NavigationSideBar'
import Typography from '../../components/Typography'
import Footer from '../../layouts/Footer'
import Header from '../../layouts/Header'
import PageLayout from '../../layouts/PageLayout'
import UserSelector from '../../store/reducers/user/UserSelector'
import indexPageStyles from './indexPage.styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useMemo } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'

function IndexPage() {
  const user = useSelector(UserSelector())

  const navigation = useNavigation()

  useEffect(() => {
    ;(async () => {
      try {
        const userData = JSON.stringify({
          id: user?.id,
          userName: user?.userName,
          phoneNumber: user?.phoneNumber,
          profilePic: user?.profilePic,
        })

        await AsyncStorage.setItem('@user', userData)
      } catch (error) {
        console.log(`Async storage ${error}`)
      }
    })()
  }, [])

  const navigateToFavourites = () => {
    navigation.navigate('/favourites' as never)
  }

  const header = useMemo(() => {
    return (
      <Header
        leftSideSlot={<Typography variant="title-1">Главная</Typography>}
        rightSideSlot={
          <TouchableIcon
            iconName="ios-heart-outline"
            iconSize={45}
            onPress={navigateToFavourites}
          />
        }
      />
    )
  }, [])

  const footer = useMemo(() => {
    return (
      <Footer isNavigation>
        <NavigationSideBar />
      </Footer>
    )
  }, [])

  const cards = [
    {
      id: 0,
      name: 'Классический стиль',
      src: [jacket, jacket, jacket, jacket, jacket, jacket],
      date: Date.now().toString(),
    },
    {
      id: 1,
      name: 'Классический стиль',
      src: [jacket, jacket, jacket, jacket, jacket, jacket],
      date: Date.now().toString(),
    },
    {
      id: 2,
      name: 'Классический стиль',
      src: [jacket, jacket, jacket, jacket, jacket, jacket],
      date: Date.now().toString(),
    },
    {
      id: 3,
      name: 'Классический стиль',
      src: [jacket, jacket, jacket, jacket, jacket, jacket],
      date: Date.now().toString(),
    },
    {
      id: 4,
      name: 'Классический стиль',
      src: [jacket, jacket, jacket, jacket, jacket, jacket],
      date: Date.now().toString(),
    },
  ]

  return (
    <PageLayout
      header={header}
      footer={footer}
      footerIsNavigation
    >
      <View style={indexPageStyles['indexPageStyles']}>
        <View style={indexPageStyles['indexPageStyles-cards']}>
          {cards.map((elem) => (
            <Card
              cardName={elem.name}
              imageSrces={elem.src}
              date={elem.date}
            />
          ))}
        </View>
      </View>
    </PageLayout>
  )
}

export default IndexPage
