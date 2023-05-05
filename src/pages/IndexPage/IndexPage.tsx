import IconComponent from '../../components/IconComponent';
import NavigationSideBar from '../../components/NavigationComponents/NavigationSideBar';
import Typography from '../../components/Typography';
import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';
import PageLayout from '../../layouts/PageLayout';
import UserSelector from '../../store/reducers/user/UserSelector';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';


function IndexPage() {
  const user = useSelector(UserSelector())

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

  const header = useMemo(() => {
    return (
      <Header
        leftSideSlot={<Typography variant="title-1">Главная</Typography>}
        rightSideSlot={
          <IconComponent
            iconName="ios-heart-outline"
            size={45}
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

  return (
    <PageLayout
      header={header}
      footer={footer}
      footerIsNavigation
    />
  )
}

export default IndexPage