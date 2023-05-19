import IconComponent from '../../components/Icons/IconComponent'
import NavigationSideBar from '../../components/NavigationComponents/NavigationSideBar'
import Typography from '../../components/Typography'
import Footer from '../../layouts/Footer'
import Header from '../../layouts/Header'
import PageLayout from '../../layouts/PageLayout'
import UserSelector from '../../store/reducers/user/UserSelector'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useMemo } from 'react'
import { TouchableHighlight } from 'react-native'
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
          <TouchableHighlight
            underlayColor="transparent"
            activeOpacity={1}
            onPress={navigateToFavourites}
          >
            <IconComponent
              iconName="ios-heart-outline"
              size={45}
            />
          </TouchableHighlight>
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

  return (
    <PageLayout
      header={header}
      footer={footer}
      footerIsNavigation
    />
  )
}

export default IndexPage
